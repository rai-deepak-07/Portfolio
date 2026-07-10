import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

// ---------------------------------------------------------------------------
// Data
// NOTE: added a `status` field per project — swap these for the real state
// of each deployment ("Live" shows a pulsing dot, anything else shows a
// static hollow dot). Renamed `GitHub` -> `github` for consistency.
// ---------------------------------------------------------------------------

const projects = [
  {
    id: 1,
    title: "SmartDine",
    category: "Restaurant Platform",
    status: "Live",
    description:
      "Complete restaurant booking, ordering and payment platform with an enterprise backend architecture.",
    image: "https://cdn.dribbble.com/userupload/46897008/file/77c43fcf443b0c3c46704401dea4562b.png",
    featured: true,
    technologies: ["React", "Django", "PostgreSQL", "REST API"],
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "AI Face Recognition",
    category: "Artificial Intelligence",
    status: "Live",
    description:
      "Secure intelligent image matching platform powered by facial recognition.",
    image: "/projects/face.jpg",
    featured: false,
    technologies: ["Python", "DeepFace", "React"],
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio Platform",
    category: "Personal Brand",
    status: "Live",
    description: "Modern portfolio powered by React, Django and REST APIs.",
    image: "/projects/portfolio.jpg",
    featured: false,
    technologies: ["React", "Django"],
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "TaskFlow",
    category: "Productivity",
    status: "In Development",
    description:
      "Modern task management platform built with scalable architecture.",
    image: "/projects/taskflow.jpg",
    featured: false,
    technologies: ["React", "Node"],
    live: "#",
    github: "#",
  },
];

const featuredProject = projects.find((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);
const totalCount = String(projects.length).padStart(2, "0");

// Shared index tag: "01 / 04" — encodes real position in the list
function IndexTag({ id }) {
  return (
    <span className="font-mono text-xs tracking-[0.2em] text-muted">
      {String(id).padStart(2, "0")}
      <span className="text-white/20"> / {totalCount}</span>
    </span>
  );
}

// Status dot: pulsing solid for Live, hollow static otherwise
function StatusDot({ status }) {
  const isLive = status === "Live";
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
      <span className="relative flex h-1.5 w-1.5">
        {isLive && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
        )}
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
            isLive ? "bg-primary" : "border border-white/30 bg-transparent"
          }`}
        />
      </span>
      {status}
    </span>
  );
}

// Tech stack rendered as a spec line, not a wall of pills
function TechSpec({ technologies }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted/70">
      {technologies.map((tech, i) => (
        <span key={tech}>
          {tech}
          {i < technologies.length - 1 && (
            <span className="mx-2 text-white/20">/</span>
          )}
        </span>
      ))}
    </p>
  );
}

// The single signature interaction used across every image: a thin
// accent-colored scanline that sweeps down on hover, plus a left edge
// that lights up. Everything else on the cards stays flat and quiet.
function ScanImage({ src, alt, sweepDistance, children }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white/[0.02]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover grayscale-[15%] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px -translate-y-2 bg-primary opacity-0 shadow-[0_0_12px_1px_rgba(91,140,255,0.6)] transition-all duration-[900ms] ease-out group-hover:translate-y-[var(--sweep)] group-hover:opacity-100"
        style={{ "--sweep": `${sweepDistance}px` }}
      />
      {children}
    </div>
  );
}

export default function FeaturedWorkSection() {
  return (
    <section id="projects" className="section-background relative py-32">
      <Container>
        <SectionTitle
          badge="FEATURED WORK"
          title="Building Products"
          highlight="That Solve Real Problems"
          description="A collection of carefully engineered products focused on performance, scalability and exceptional user experience."
        />

        {/* Index rule — ties the section together as an ordered record */}
        <div className="mt-16 flex items-center gap-4 border-b border-white/10 pb-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Project Index
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted">
            {totalCount} Entries
          </span>
        </div>

        <div className="mt-8 space-y-6">
          {/* ===================================================
              FEATURED PROJECT
          =================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group relative grid overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-primary/40 lg:grid-cols-2"
          >
            {/* left accent bar */}
            <span className="absolute inset-y-0 left-0 z-10 w-[2px] bg-white/10 transition-colors duration-500 group-hover:bg-primary" />

            <div className="relative min-h-[240px] lg:min-h-[320px]">
              <ScanImage
                src={featuredProject.image}
                alt={featuredProject.title}
                sweepDistance={460}
              >
                <span className="absolute left-8 top-8 font-mono text-[12px] uppercase tracking-[0.3em] text-primary">
                  Featured
                </span>
              </ScanImage>
            </div>

            <div className="flex flex-col justify-between p-6 lg:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <IndexTag id={featuredProject.id} />
                  <StatusDot status={featuredProject.status} />
                </div>

                <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  {featuredProject.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold leading-tight lg:text-4xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm md:text-base leading-6 md:leading-7 text-muted">
                  {featuredProject.description}
                </p>

                <div className="mt-5 md:mt-8 border-t border-white/10 pt-5">
                  <TechSpec technologies={featuredProject.technologies} />
                </div>
              </div>

              <div className="mt-7 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
                <Button rightIcon={<ExternalLink size={18} />}>
                  Live Demo
                </Button>
                <Button variant="secondary" leftIcon={<FaGithub size={18} />}>
                  Source Code
                </Button>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="ml-auto flex items-center gap-2 font-semibold text-primary"
                >
                  View Details
                  <ArrowUpRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.article>

          {/* ===================================================
              OTHER PROJECTS
          =================================================== */}
          <div className="grid gap-6 md:grid-cols-3">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-primary/40"
              >
                <span className="absolute inset-x-0 top-0 z-10 h-[2px] bg-white/10 transition-colors duration-500 group-hover:bg-primary" />

                <div className="relative h-52">
                  <ScanImage
                    src={project.image}
                    alt={project.title}
                    sweepDistance={208}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <IndexTag id={project.id} />
                    <StatusDot status={project.status} />
                  </div>

                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">{project.title}</h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <TechSpec technologies={project.technologies} />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <a
                      href={project.live}
                      className="flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-primary"
                    >
                      Preview <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.github}
                      aria-label={`${project.title} source code`}
                      className="text-muted transition-colors hover:text-primary"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6 border-t border-white/10 pt-10"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            End of index
          </span>
          <Button size="lg" rightIcon={<ArrowRight size={18} />}>
            View All Projects
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}