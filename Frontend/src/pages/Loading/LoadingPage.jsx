import { useEffect, useState } from "react";
import { Cpu, Terminal, Layers } from "lucide-react";

const LoadingPage = () => {
  const [dots, setDots] = useState("");

  // Simple, lightweight text pulse for micro-interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 text-zinc-50 antialiased select-none">
      
      {/* 21st.dev Premium Mesh & Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[100px]" />
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" 
        />
      </div>

      {/* Main Core Center Console */}
      <div className="relative flex flex-col items-center max-w-xs w-full">
        
        {/* Compact Core Loading Ring */}
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          {/* External Spinning Dash Tracker */}
          <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-[spin_8s_linear_infinite]" />
          
          {/* Ambient Glow */}
          <div className="absolute inset-2 rounded-full bg-cyan-500/10 blur-md animate-pulse" />
          
          {/* Inner Clean Track Accent */}
          <div className="absolute inset-2 rounded-full border border-zinc-800/80 bg-zinc-950 flex flex-col items-center justify-center shadow-[inset_0_0_12px_rgba(6,182,212,0.05)]">
            <h1 className="text-xl font-black tracking-wider bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">DR</h1>
            <span className="text-[7px] font-bold tracking-[2px] text-cyan-400/80 uppercase mt-0.5">Core</span>
          </div>
        </div>

        {/* Dynamic Tracking Status Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-3 py-1.5 text-xs font-mono text-zinc-400 max-w-full">
          <Terminal size={12} className="text-cyan-400 shrink-0" />
          <span className="truncate">structuring_env{dots}</span>
        </div>

        {/* Clean Line-fill Progress Bar */}
        <div className="w-full">
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-zinc-900">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 animate-[loading_1.5s_cubic-bezier(0.4,0,0.2,1)_infinite]" />
          </div>
        </div>

        {/* Tech Stack Horizontal Pill Tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 max-w-[280px]">
          {["React", "Django", "Python", "Docker"].map((tech) => (
            <div 
              key={tech}
              className="inline-flex items-center gap-1 rounded-md border border-zinc-900 bg-zinc-900/20 px-2 py-0.5 text-[10px] font-medium text-zinc-500 tracking-wide"
            >
              {tech === "React" && <Cpu size={10} className="text-zinc-600" />}
              {tech === "Django" && <Layers size={10} className="text-zinc-600" />}
              <span>{tech}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Embedded keyframe configurations */}
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;