import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import IndexTag from "./IndexTag";
import ProjectStatus from "./ProjectStatus";
import ProjectTechStack from "./ProjectTechStack";
import ScanImage from "./ScanImage";

const ProjectCard = ({ project, index, totalCount, onClick }) => {
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
      onClick={() => {
        console.log("Clicked:", project.slug);
        onClick?.(project.slug)}
       }
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick(project.slug);
        }
      }}
      className={`group relative flex flex-col h-full overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-primary/40 ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {/* Top accent line from original theme */}
      <span className="absolute inset-x-0 top-0 z-10 h-[2px] bg-white/10 transition-colors duration-500 group-hover:bg-primary" />

      {/* Image Container with explicit row height */}
      <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-44 md:h-52">
        <ScanImage
          src={project.thumbnail}
          alt={project.title}
        />
      </div>

      {/* Content Distribution Block */}
      <div className="flex flex-col flex-1 p-4 justify-between sm:p-5 md:p-6">
        
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between">
            <IndexTag index={index} totalCount={totalCount} />
            <ProjectStatus status={project.status_display} />
          </div>

          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-primary sm:mt-5">
            {project.category?.name}
          </p>

          <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
            {project.title}
          </h3>

          <p className="mt-2.5 flex-1 text-sm leading-6 text-muted line-clamp-3 sm:mt-3">
            {project.short_description}
          </p>

          <div className="mt-4 border-t border-white/10 pt-3.5 sm:mt-5 sm:pt-4">
            <ProjectTechStack technologies={project.technologies} />
          </div>
        </div>

        {/* Action Tray */}
        <div className="mt-4 flex items-center justify-between pt-3 sm:mt-5">
          {project.live_url ? (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-primary cursor-pointer"
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
              onClick={(e) => e.stopPropagation()}
              className="text-muted transition-colors hover:text-primary cursor-pointer"
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