import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap, RadioTower } from "lucide-react";
import { cn } from "../../utils/cn";

export default function RadialOrbitalTimeline({ timelineData }) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [pulseEffect, setPulseEffect] = useState({});
  const [radius, setRadius] = useState(160);
  const [stageSize, setStageSize] = useState(380);

  const stageRef = useRef(null);

  // Measure the actual rendered stage and derive a responsive orbit radius,
  // instead of a hardcoded 200px that only worked on one screen size.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const measure = () => {
      const size = el.offsetWidth;
      setStageSize(size);
      setRadius(Math.max(70, Math.min(210, size / 2 - 46)));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const activeItem = timelineData.find((item) => item.id === activeNodeId) || null;

  const getRelatedItems = (itemId) => {
    const item = timelineData.find((i) => i.id === itemId);
    return item ? item.relatedIds : [];
  };

  const isRelatedToActive = (itemId) =>
    activeNodeId != null && getRelatedItems(activeNodeId).includes(itemId);

  const isExpanded = (itemId) => activeNodeId === itemId;

  const centerViewOnNode = (nodeId) => {
    const index = timelineData.findIndex((item) => item.id === nodeId);
    if (index === -1) return;
    const targetAngle = (index / timelineData.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id) => {
    if (activeNodeId === id) {
      setActiveNodeId(null);
      setAutoRotate(true);
      setPulseEffect({});
      return;
    }

    setActiveNodeId(id);
    setAutoRotate(false);
    centerViewOnNode(id);

    const related = getRelatedItems(id);
    const next = {};
    related.forEach((relId) => (next[relId] = true));
    setPulseEffect(next);
  };

  // Nodes call stopPropagation, so this only fires for background clicks —
  // no need to compare e.target against multiple refs.
  const handleStageClick = () => {
    setActiveNodeId(null);
    setAutoRotate(true);
    setPulseEffect({});
  };

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.45, Math.min(1, 0.45 + 0.55 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return "text-primary bg-primary/15 border-primary/30";
      case "in-progress":
        return "text-secondary bg-secondary/15 border-secondary/30";
      default:
        return "text-white/70 bg-white/5 border-white/15";
    }
  };

  const ringSize = radius * 2 + 60;

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {/* Eyebrow — gives the idle state a reason to exist beyond a spinning ring */}
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
        <RadioTower size={12} className="text-primary" />
        {activeItem ? "Node selected" : "Auto-orbiting — tap a node to explore"}
      </div>

      {/* Orbit stage */}
      <div
        ref={stageRef}
        onClick={handleStageClick}
        className="relative aspect-square w-full max-w-[480px] select-none"
      >
        {/* background dot field, adds depth behind the bare ring */}
        <div className="absolute inset-0 rounded-full text-white opacity-[0.15] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* concentric guide rings */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
          style={{ width: ringSize, height: ringSize }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
          style={{ width: ringSize * 0.6, height: ringSize * 0.6 }}
        />

        {/* spokes — only drawn to the active node + its related nodes */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${stageSize} ${stageSize}`}
        >
          {timelineData.map((item, index) => {
            if (!activeNodeId) return null;
            if (item.id !== activeNodeId && !isRelatedToActive(item.id)) return null;
            const pos = calculateNodePosition(index, timelineData.length);
            const cx = stageSize / 2;
            const cy = stageSize / 2;
            return (
              <line
                key={item.id}
                x1={cx}
                y1={cy}
                x2={cx + pos.x}
                y2={cy + pos.y}
                stroke={
                  item.id === activeNodeId
                    ? "rgba(91,140,255,0.55)"
                    : "rgba(91,140,255,0.25)"
                }
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            );
          })}
        </svg>

        {/* center hub */}
        <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_40px_rgba(91,140,255,.35)]">
          <div className="absolute h-20 w-20 animate-ping rounded-full border border-primary/30 opacity-60" />
          <div
            className="absolute h-24 w-24 animate-ping rounded-full border border-secondary/20 opacity-40"
            style={{ animationDelay: "0.6s" }}
          />
          <div className="h-3 w-3 rounded-full bg-white/90" />
        </div>

        {/* nodes */}
        {timelineData.map((item, index) => {
          const pos = calculateNodePosition(index, timelineData.length);
          const isActive = activeNodeId === item.id;
          const isRelated = isRelatedToActive(item.id);
          const isPulsing = pulseEffect[item.id];
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="absolute left-1/2 top-1/2 flex cursor-pointer flex-col items-center transition-transform duration-700 ease-out"
              style={{
                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`,
                zIndex: isActive ? 200 : pos.zIndex,
                opacity: isActive ? 1 : pos.opacity,
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              {/* trailing comet glow, gives the motion some weight */}
              <div
                className={cn(
                  "pointer-events-none absolute h-10 w-10 rounded-full",
                  isPulsing && "animate-pulse"
                )}
                style={{
                  background:
                    "radial-gradient(circle, rgba(91,140,255,0.3) 0%, rgba(91,140,255,0) 70%)",
                  transform: `rotate(${-pos.angle}deg) translateX(-14px) scale(1.6)`,
                }}
              />

              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 backdrop-blur-md transition-all duration-300",
                  isActive
                    ? "scale-125 border-white/40 bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30"
                    : isRelated
                    ? "animate-pulse border-primary/50 bg-primary/20 text-primary"
                    : "border-white/15 bg-white/5 text-white/80 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                )}
              >
                <Icon size={16} />
              </div>

              <span
                className={cn(
                  "mt-2 whitespace-nowrap text-[10px] font-semibold tracking-wider transition-all duration-300",
                  isActive ? "text-white" : "text-muted"
                )}
              >
                {item.title}
              </span>

              {/* Expanded card — stays anchored to its own node, but flips its
                  anchor side based on where the node sits so it can't run off
                  the edge of the screen on mobile. */}
              {isExpanded(item.id) && (
                <div
                  className={cn(
                    "absolute top-12 z-50 w-[min(85vw,16rem)] overflow-visible rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/40 backdrop-blur-xl",
                    pos.x > radius * 0.25
                      ? "right-0"
                      : pos.x < -radius * 0.25
                      ? "left-0"
                      : "left-1/2 -translate-x-1/2"
                  )}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6 pb-2">
                    <div className="flex items-center justify-between">
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
                      <span className="font-mono text-xs text-muted">{item.date}</span>
                    </div>
                    <h3 className="mt-2 text-sm font-semibold text-white">{item.title}</h3>
                  </div>

                  <div className="px-6 pb-6 text-xs text-white/70">
                    <p>{item.content}</p>

                    <div className="mt-4 border-t border-white/10 pt-3">
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="flex items-center text-muted">
                          <Zap size={10} className="mr-1" />
                          Energy Level
                        </span>
                        <span className="font-mono text-white">{item.energy}%</span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          style={{ width: `${item.energy}%` }}
                        />
                      </div>
                    </div>

                    {item.relatedIds.length > 0 && (
                      <div className="mt-4 border-t border-white/10 pt-3">
                        <div className="mb-2 flex items-center">
                          <Link size={10} className="mr-1 text-muted" />
                          <h4 className="text-xs font-medium uppercase tracking-wider text-muted">
                            Connected Nodes
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.relatedIds.map((relId) => {
                            const rel = timelineData.find((i) => i.id === relId);
                            if (!rel) return null;
                            return (
                              <button
                                key={relId}
                                className="flex h-6 items-center rounded-full border border-white/10 bg-white/5 px-2.5 text-xs text-white/70 transition-all hover:border-primary/40 hover:bg-white/10 hover:text-white"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relId);
                                }}
                              >
                                {rel.title}
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
  );
}