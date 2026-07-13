
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  ShieldCheck,
  RotateCw,
  Wrench,
} from "lucide-react";

import { usePortfolio } from "../../context/PortfolioContext";

const MaintenancePage = () => {
  const { state } = usePortfolio();
  const maintenance = state?.maintenance;

  const [refreshing, setRefreshing] = useState(false);
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!maintenance?.show_countdown) return;

    const update = () => {
      const diff = new Date(maintenance.end_date).getTime() - Date.now();

      if (diff <= 0) {
        setRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        // Automatically refresh the application once the countdown ends.
        // This allows BootstrapProvider to fetch the latest maintenance state.
        window.location.reload();

        return;
      }

      setRemaining({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [maintenance]);

  if (!maintenance) return null;

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(date));

  const hasImage = Boolean(maintenance.maintenance_image);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      window.location.reload();
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#06b6d433,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed33,transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6">
        <motion.div
          initial={{opacity:0,y:25}}
          animate={{opacity:1,y:0}}
          className={`w-full ${hasImage ? "max-w-7xl" : "max-w-3xl"} rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden`}
        >
          <div className={hasImage ? "grid lg:grid-cols-[0.42fr_0.58fr]" : "block"}>
            {hasImage && (
              <div className="flex items-center justify-center border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
                <img
                  src={maintenance.maintenance_image}
                  alt={maintenance.title}
                  className="max-h-[420px] w-full object-contain"
                />
              </div>
            )}

            <div className={`p-6 sm:p-8 lg:p-10 ${!hasImage ? "text-center" : ""}`}>
              <div className={`inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs sm:text-sm text-cyan-200 ${!hasImage ? "mx-auto" : ""}`}>
                {!hasImage && <Wrench className="h-4 w-4" />}
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"/>
                Scheduled Maintenance
              </div>

              <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                {maintenance.title}
              </h1>

              <p className={`mt-5 text-sm leading-7 text-slate-300 sm:text-base lg:text-lg ${!hasImage ? "mx-auto max-w-2xl" : ""}`}>
                {maintenance.message}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <CalendarDays className="mb-3 h-5 w-5 text-cyan-300"/>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Starts</p>
                  <h3 className="mt-2 text-sm font-semibold sm:text-base">{formatDate(maintenance.start_date)}</h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <Clock3 className="mb-3 h-5 w-5 text-cyan-300"/>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Expected Completion</p>
                  <h3 className="mt-2 text-sm font-semibold sm:text-base">{formatDate(maintenance.end_date)}</h3>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 sm:p-5">
                <div className={`flex items-center gap-3 ${!hasImage ? "justify-center" : ""}`}>
                  <ShieldCheck className="h-5 w-5 text-emerald-400"/>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-300">Status</p>
                    <h4 className="font-semibold">Maintenance in Progress</h4>
                  </div>
                </div>
              </div>

              {maintenance.show_countdown && (
                <div className="mt-8">
                  <p className="mb-4 text-center text-xs uppercase tracking-[3px] text-slate-400">
                    Time Remaining
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      ["Days", remaining.days],
                      ["Hours", remaining.hours],
                      ["Minutes", remaining.minutes],
                      ["Seconds", remaining.seconds],
                    ].map(([label,value])=>(
                      <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                        <div className="text-2xl font-bold text-cyan-300 sm:text-3xl">
                          {String(value).padStart(2,"0")}
                        </div>
                        <div className="mt-2 text-xs text-slate-400">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className={`mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-60 ${!hasImage ? "w-full sm:w-auto" : ""}`}
              >
                <RotateCw className={`h-5 w-5 ${refreshing ? "animate-spin" : ""}`}/>
                {refreshing ? "Refreshing..." : "Refresh Status"}
              </button>

              <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-slate-400">
                Thank you for your patience. The application will automatically become available once maintenance is completed.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MaintenancePage;
