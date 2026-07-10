import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Clock3,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const MaintenancePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: .96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: .7 }}
          className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/15 ring-1 ring-cyan-400/30"
            >
              <Wrench className="h-12 w-12 text-cyan-300" />
            </motion.div>

            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Scheduled Maintenance
            </span>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              We'll be back shortly
            </h1>

            <p className="mt-5 max-w-xl text-slate-300 leading-8">
              We're upgrading the platform to deliver faster APIs, improved
              performance, and a better experience. Thank you for your patience.
            </p>

            <div className="mt-10 grid w-full gap-5 md:grid-cols-3">
              {[
                { icon: Clock3, title: "Estimated Time", value: "30 Minutes" },
                { icon: ShieldCheck, title: "Status", value: "Maintenance" },
                { icon: Sparkles, title: "What's New", value: "Performance Upgrade" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left"
                  >
                    <Icon className="mb-3 h-7 w-7 text-cyan-300" />
                    <p className="text-sm text-slate-400">{item.title}</p>
                    <h3 className="mt-2 font-semibold">{item.value}</h3>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
                Notify Me
              </button>

              <button className="group rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10">
                System Status
                <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>

            <p className="mt-10 text-sm text-slate-500">
              © 2026 Deepak Raikwar • Portfolio Platform
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MaintenancePage;
