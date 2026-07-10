
import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#030712] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px] animate-pulse" />

        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex h-full items-center justify-center">
        <div className="relative">

          <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-6 rounded-full border border-blue-400/20 animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute -inset-12 rounded-full border border-violet-400/20 animate-[spin_30s_linear_infinite]" />

          {["React","Python","Django","REST","PostgreSQL","Docker"].map((t,i)=>(
            <div
              key={t}
              className="absolute left-1/2 top-1/2 origin-center animate-[spin_18s_linear_infinite]"
              style={{
                transform:`rotate(${i*60}deg) translateY(-180px)`
              }}
            >
              <div className="rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1 text-xs backdrop-blur">
                {t}
              </div>
            </div>
          ))}

          <div className="relative flex h-40 w-40 items-center justify-center rounded-full">
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-3xl animate-pulse"/>
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 animate-spin"/>
            <div className="absolute inset-3 rounded-full bg-[#030712]"/>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl font-black tracking-[8px]">DR</h1>
              <p className="mt-2 text-[10px] tracking-[4px] text-cyan-300 uppercase">
                AI Core
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[340px] max-w-[90vw]">
        <p className="mb-4 text-center text-sm uppercase tracking-[4px] text-cyan-300">
          Initializing Portfolio Experience...
        </p>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 animate-[loading_2s_linear_infinite]" />
        </div>

        <p className="mt-4 text-center text-slate-400">
          React • Django • Python • PostgreSQL
        </p>
      </div>

      <style>{`
        @keyframes loading{
          from{transform:translateX(-100%)}
          to{transform:translateX(100%)}
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
