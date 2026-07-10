import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, ServerCog, Rocket, ShieldCheck, Boxes } from "lucide-react";

const services = [
  { icon: ServerCog, title:"Backend Engineering", desc:"Scalable Django REST APIs, authentication, architecture and business logic.", tech:["Django","DRF","JWT"]},
  { icon: Code2, title:"Frontend Development", desc:"Beautiful React interfaces focused on speed, UX and responsiveness.", tech:["React","Tailwind","Motion"]},
  { icon: Database, title:"Database Design", desc:"Well structured PostgreSQL schemas with optimized queries.", tech:["PostgreSQL","SQL","Indexing"]},
  { icon: Boxes, title:"System Architecture", desc:"Clean modular architecture built for maintainability and growth.", tech:["Architecture","Scalable","Secure"]},
  { icon: Rocket, title:"Deployment", desc:"Production deployment with Docker, CI/CD and monitoring.", tech:["Docker","Linux","CI/CD"]},
  { icon: ShieldCheck, title:"Maintenance", desc:"Continuous improvements, optimization and long‑term support.", tech:["Security","Performance","Support"]},
];

export default function SolutionsSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#070B17] py-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-600/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-blue-300">
          Solutions I Deliver
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white">
            Transforming ideas into
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              scalable digital products.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every solution is designed with clean architecture, modern engineering,
            outstanding user experience and long-term maintainability.
          </p>
        </motion.div>

        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="group relative mt-16 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-transparent to-violet-500/10"/>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-3 shadow-lg shadow-blue-600/30">
                <Code2 className="text-white" size={22}/>
              </div>
              <h3 className="text-3xl font-bold text-white">Complete Product Engineering</h3>
              <p className="mt-4 text-slate-400 leading-7">
                I build production-ready software—from UI and backend APIs to deployment,
                performance optimization and future scalability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["React","Django","REST API","PostgreSQL","Docker","JWT"].map(t=>(
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">{t}</span>
                ))}
              </div>
            </div>

            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 font-semibold text-white transition hover:scale-105">
              Explore Projects <ArrowUpRight className="ml-2 inline h-4 w-4"/>
            </button>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s,i)=>{
            const Icon=s.icon;
            return (
              <motion.div key={s.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}} viewport={{once:true}}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/[0.06]">
                <div className="inline-flex rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-2.5 shadow-lg shadow-blue-600/20">
                  <Icon className="text-white" size={20}/>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-white">{s.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tech.map(t=><span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">{t}</span>)}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}