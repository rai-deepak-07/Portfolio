import React from 'react';
import { FileQuestion, Home, HelpCircle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50 antialiased selection:bg-cyan-500/30">
      
      {/* 21st.dev Shared Premium Mesh & Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.03] blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.02] blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-md text-center flex flex-col items-center">
          
          {/* Micro Icon Terminal Core */}
          <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-zinc-900/40 border border-zinc-800" />
            <div className="absolute inset-2 rounded-full bg-cyan-500/5 blur-md animate-pulse" />
            <div className="relative text-cyan-400">
              <FileQuestion size={28} strokeWidth={1.5} />
            </div>
          </div>

          {/* Micro Status Chip */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 px-3 py-1 text-xs font-mono text-zinc-400 tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            ERROR CODE: 404
          </div>
          
          {/* Main Typography Scales */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 leading-tight">
            Page Not Found
          </h1>
          
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 max-w-sm px-2">
            The page you are looking for might have been routed out of production, altered, or temporarily dropped from active branches.
          </p>
          
          {/* Responsive Action Matrix */}
          <div className="mt-8 flex w-full flex-col sm:flex-row justify-center gap-3 px-4 sm:px-0">
            <a
              href="/"
              className="flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-95 shadow-sm cursor-pointer w-full sm:w-auto order-1 sm:order-2"
            >
              <Home size={14} />
              Go Back Home
            </a>
            
            <a
              href="/support"
              className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-2.5 text-xs font-semibold text-zinc-400 transition-all hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200 active:scale-95 cursor-pointer w-full sm:w-auto order-2 sm:order-1"
            >
              <HelpCircle size={14} />
              Contact Support
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;