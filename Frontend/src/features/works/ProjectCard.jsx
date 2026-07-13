import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import IndexTag from "./IndexTag";
import ProjectStatus from "./ProjectStatus";
import ProjectTechStack from "./ProjectTechStack";
import ScanImage from "./ScanImage";

const ProjectCard = ({
  project,
  index,
  totalCount,
}) => {
  if (!project) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: (index - 2) * 0.1,
      }}
      className="group relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-primary/40"
    >
      {/* top accent line */}
      <span className="absolute inset-x-0 top-0 z-10 h-[2px] bg-white/10 transition-colors duration-500 group-hover:bg-primary" />

      {/* Image */}

      <div className="relative h-52">
        <ScanImage
          src={project.thumbnail}
          alt={project.title}
          sweepDistance={208}
        />
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">

        <div className="flex items-center justify-between">

          <IndexTag
            index={index}
            totalCount={totalCount}
          />

          <ProjectStatus
            status={project.status_display}
          />

        </div>

        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
          {project.category?.name}
        </p>

        <h3 className="mt-2 text-xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-muted">
          {project.short_description}
        </p>

        <div className="mt-5 border-t border-white/10 pt-4">

          <ProjectTechStack
            technologies={project.technologies}
          />

        </div>

        <div className="mt-5 flex items-center justify-between">

          {project.live_url ? (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-primary"
            >
              Preview

              <ExternalLink size={14} />
            </a>
          ) : (
            <span />
          )}

          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="text-muted transition-colors hover:text-primary"
            >
              <FaGithub size={18} />
            </a>
          )}

        </div>

      </div>
    </motion.article>
  );
};

export default React.memo(ProjectCard);