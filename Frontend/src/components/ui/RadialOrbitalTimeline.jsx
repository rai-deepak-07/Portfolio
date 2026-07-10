import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { cn } from "../../utils/cn";

export default function RadialOrbitalTimeline({ timelineData }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [viewMode] = useState("orbital");
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [centerOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState(null);
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        if (parseInt(key) !== id) newState[key] = false;
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) clearInterval(rotationTimer);
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return "text-primary bg-primary/15 border-primary/30";
      case "in-progress":
        return "text-secondary bg-secondary/15 border-secondary/30";
      case "pending":
        return "text-white/70 bg-white/5 border-white/15";
      default:
        return "text-white/70 bg-white/5 border-white/15";
    }
  };

  return (
    <div
      className="relative w-full h-[500px] md:h-[470px] flex flex-col items-center justify-center"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-15 h-15 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse flex items-center justify-center z-5 shadow-[0_0_40px_rgba(91,140,255,.35)]">
            <div className="absolute w-20 h-20 rounded-full border border-primary/30 animate-ping opacity-70" />
            <div
              className="absolute w-24 h-24 rounded-full border border-secondary/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            />
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md" />
          </div>

          <div className="absolute w-97 h-97 rounded-full border border-white/10" />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={cn(
                    "absolute rounded-full -inset-1",
                    isPulsing && "animate-pulse duration-1000"
                  )}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(91,140,255,0.25) 0%, rgba(91,140,255,0) 70%)",
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                />

                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 backdrop-blur-md transition-all duration-300 transform",
                    isExpanded
                      ? "bg-gradient-to-br from-primary to-secondary text-white border-white/40 shadow-lg shadow-primary/30 scale-150"
                      : isRelated
                      ? "bg-primary/20 text-primary border-primary/50 animate-pulse"
                      : "bg-white/5 text-white/80 border-white/15"
                  )}
                >
                  <Icon size={16} />
                </div>

                <div
                  className={cn(
                    "absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300",
                    isExpanded ? "text-white scale-125" : "text-muted"
                  )}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/20" />

                    <div className="p-6 pb-2">
                      <div className="flex justify-between items-center">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                            getStatusStyles(item.status)
                          )}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </span>
                        <span className="text-xs font-mono text-muted">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-sm mt-2 font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div className="px-6 pb-6 text-xs text-white/70">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center text-muted">
                            <Zap size={10} className="mr-1" />
                            Energy Level
                          </span>
                          <span className="font-mono text-white">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-muted mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-muted">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <button
                                  key={relatedId}
                                  className="flex items-center h-6 px-2.5 py-0 text-xs rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 text-white/70 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1 text-primary" />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}