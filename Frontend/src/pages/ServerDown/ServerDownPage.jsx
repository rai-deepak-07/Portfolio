import { useState } from "react";
import { Server, RefreshCw, Home, ServerOff, CheckCircle2, AlertTriangle } from "lucide-react";

const ServerDownPage = () => {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4 py-12 text-zinc-50 antialiased selection:bg-red-500/30">
      
      {/* 21st.dev Premium Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Center Red Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.06] blur-[120px]" />
        
        {/* Elegant Tech Grid Mesh Overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" 
        />
      </div>

      {/* Main Content Card Container */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        
        {/* Micro-sized Server Indicator Core */}
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl animate-pulse" />
          <div className="absolute inset-0 rounded-2xl border border-red-500/20 animate-ping [animation-duration:3s]" />
          
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/80 text-red-500 shadow-[0_0_25px_rgba(239,68,68,0.15)]">
            <Server size={24} className="animate-pulse" />
          </div>
        </div>

        {/* Dynamic Micro Status Badge */}
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs font-medium text-red-400 tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          SYSTEM OFFLINE
        </div>

        {/* Scaled Typography Hierarchy */}
        <h1 className="mb-3 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
          Server Interrupted
        </h1>

        <p className="max-w-sm text-sm text-zinc-400 leading-relaxed px-2">
          Our systems are currently experiencing unexpected downtime. We are actively deploying fixes to restore operational performance.
        </p>

        {/* Clean Status Checklist Panel */}
        <div className="mt-8 w-full rounded-2xl border border-zinc-900 bg-zinc-900/30 p-4 backdrop-blur-md space-y-3 text-left">
          
          <div className="flex items-center justify-between border-b border-zinc-900/50 pb-2.5">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <ServerOff size={14} className="text-zinc-500" />
              <span>API Gateway</span>
            </div>
            <span className="text-xs font-medium text-red-400 bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10">Offline</span>
          </div>

          <div className="flex items-center justify-between border-b border-zinc-900/50 pb-2.5">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <AlertTriangle size={14} className="text-zinc-500" />
              <span>Database Cluster</span>
            </div>
            <span className="text-xs font-medium text-amber-400 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10 animate-pulse">Reconnecting</span>
          </div>

          <div className="flex items-center justify-between pt-0.5">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <CheckCircle2 size={14} className="text-zinc-500" />
              <span>Monitoring Core</span>
            </div>
            <span className="text-xs font-medium text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">Active</span>
          </div>

        </div>

        {/* Action Controls Group */}
        <div className="mt-8 flex w-full flex-col sm:flex-row justify-center gap-3 px-2">
          
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-98 disabled:opacity-75 w-full sm:w-auto order-1 sm:order-2 shadow-sm"
          >
            <RefreshCw size={14} className={`transition-transform ${isRetrying ? "animate-spin" : ""}`} />
            {isRetrying ? "Checking..." : "Retry Connection"}
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-2.5 text-xs font-semibold text-zinc-400 transition-all hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200 w-full sm:w-auto order-2 sm:order-1"
          >
            <Home size={14} />
            Back to Home
          </button>

        </div>

      </div>
    </div>
  );
};

export default ServerDownPage;