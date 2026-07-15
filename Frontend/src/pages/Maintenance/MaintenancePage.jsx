import { useEffect, useState } from "react";
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
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50 antialiased selection:bg-cyan-500/30">
      
      {/* BACKGROUND SURFACES - Safely isolated using pointer-events-none */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#06b6d433,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed33,transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      {/* CORE INTERACTIVE WRAPPER - Highly optimized responsive grid for Tablet/Laptops */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`w-full ${hasImage ? "max-w-5xl md:max-w-4xl lg:max-w-5xl" : "max-w-2xl"} rounded-2xl border border-zinc-900 bg-zinc-900/20 backdrop-blur-md overflow-hidden shadow-xl`}
        >
          <div className={hasImage ? "grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12" : "block"}>
            
            {/* Conditional Graphic Asset - Fixed sizing distributions for tablets/laptops */}
            {hasImage && (
              <div className="flex items-center justify-center bg-zinc-900/10 border-b border-zinc-900 p-6 sm:p-8 md:col-span-5 lg:col-span-5 md:border-b-0 md:border-r">
                <img
                  src={maintenance.maintenance_image}
                  alt={maintenance.title}
                  className="max-h-[260px] sm:max-h-[320px] md:max-h-[380px] w-full object-contain filter drop-shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                />
              </div>
            )}

            {/* Notification Parameters Console */}
            <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full ${hasImage ? "md:col-span-7 lg:col-span-7" : "text-center"}`}>
              <div>
                {/* Micro Status Chip */}
                <div className={`inline-flex items-center gap-2 rounded-lg border border-cyan-500/10 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-400 tracking-wide w-fit ${!hasImage ? "mx-auto flex" : ""}`}>
                  <Wrench size={12} className="text-cyan-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Scheduled Upgrades
                </div>

                <h1 className={`mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-100 leading-tight ${!hasImage ? "text-center" : ""}`}>
                  {maintenance.title}
                </h1>

                <p className={`mt-3 text-sm leading-relaxed text-zinc-400 ${!hasImage ? "text-center mx-auto max-w-lg" : ""}`}>
                  {maintenance.message}
                </p>

                {/* Horizon Metrics Schedule Split-blocks */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-zinc-900 bg-zinc-900/30 p-4">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1.5">
                      <CalendarDays size={14} />
                      <p className="text-[10px] uppercase font-semibold tracking-wider">Window Launch</p>
                    </div>
                    <h3 className="text-xs sm:text-sm font-medium text-zinc-200">{formatDate(maintenance.start_date)}</h3>
                  </div>

                  <div className="rounded-xl border border-zinc-900 bg-zinc-900/30 p-4">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1.5">
                      <Clock3 size={14} />
                      <p className="text-[10px] uppercase font-semibold tracking-wider">Expected Completion</p>
                    </div>
                    <h3 className="text-xs sm:text-sm font-medium text-zinc-200">{formatDate(maintenance.end_date)}</h3>
                  </div>
                </div>

                {/* Micro Status Inline Banner */}
                <div className="mt-3 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-3">
                  <div className={`flex items-center gap-2 text-emerald-400 ${!hasImage ? "justify-center" : ""}`}>
                    <ShieldCheck size={14} className="shrink-0" />
                    <p className="text-xs font-medium tracking-wide">Systems safe • Live updates active</p>
                  </div>
                </div>

                {/* Segmented Countdowns Matrix */}
                {maintenance.show_countdown && (
                  <div className="mt-8">
                    <p className={`mb-3 text-[10px] uppercase font-bold tracking-[2px] text-zinc-500 ${!hasImage ? "text-center" : ""}`}>
                      Time remaining in window
                    </p>

                    <div className={`grid grid-cols-4 gap-2 ${!hasImage ? "max-w-md mx-auto" : "max-w-sm"}`}>
                      {[
                        ["Days", remaining.days],
                        ["Hrs", remaining.hours],
                        ["Min", remaining.minutes],
                        ["Sec", remaining.seconds],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-xl border border-zinc-900 bg-zinc-900/10 py-2.5 text-center">
                          <div className="text-base sm:text-lg font-bold font-mono text-cyan-400">
                            {String(value).padStart(2, "0")}
                          </div>
                          <div className="text-[9px] font-medium text-zinc-500 uppercase tracking-wide mt-0.5">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Console Footers & Actions */}
              <div className="mt-8 pt-6 border-t border-zinc-900">
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-95 disabled:opacity-60 shadow-sm cursor-pointer ${!hasImage ? "w-full sm:w-auto mx-auto flex" : "w-full sm:w-auto"}`}
                >
                  <RotateCw size={13} className={`transition-transform ${refreshing ? "animate-spin" : ""}`} />
                  {refreshing ? "Re-syncing..." : "Check System Status"}
                </button>

                <p className={`mt-4 text-[11px] leading-normal text-zinc-500 ${!hasImage ? "text-center mx-auto max-w-md" : ""}`}>
                  Thank you for your patience. The workspace will automatically handshake and refresh the second live services clear current deployment lines.
                </p>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MaintenancePage;