import React from "react";

const ServerDownPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {Array.from({ length: 70 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-red-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-6 text-center">

        {/* Server Core */}
        <div className="relative mb-10 flex h-40 w-40 items-center justify-center">

          <div className="absolute inset-0 rounded-full bg-red-500/20 blur-3xl animate-pulse" />

          <div className="absolute inset-0 rounded-full border border-red-500/30 animate-ping" />

          <div className="absolute inset-5 rounded-full border border-red-400/40" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-[0_0_40px_rgba(239,68,68,.5)]">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>

          </div>
        </div>

        <span className="mb-4 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm text-red-300">
          ● SYSTEM OFFLINE
        </span>

        <h1 className="mb-4 text-5xl font-black tracking-wide">
          Server Temporarily Offline
        </h1>

        <p className="max-w-md text-slate-400 leading-7">
          Our services are currently unavailable due to scheduled maintenance
          or an unexpected interruption. We're already working to restore
          everything as quickly as possible.
        </p>

        {/* Status Card */}
        <div className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

          <div className="mb-4 flex items-center justify-between">
            <span className="text-slate-400">API Gateway</span>
            <span className="text-red-400">Offline</span>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <span className="text-slate-400">Database</span>
            <span className="text-yellow-400">Reconnecting</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400">Monitoring</span>
            <span className="text-green-400">Active</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button
            onClick={() => window.location.reload()}
            className="rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 font-semibold transition hover:scale-105"
          >
            Retry Connection
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            Back to Home
          </button>

        </div>

      </div>
    </div>
  );
};

export default ServerDownPage;