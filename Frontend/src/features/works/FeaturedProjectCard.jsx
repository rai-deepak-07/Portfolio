import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Button from "../../components/ui/Button";

import IndexTag from "./IndexTag";
import ProjectStatus from "./ProjectStatus";
import ProjectTechStack from "./ProjectTechStack";
import ScanImage from "./ScanImage";

const FeaturedProjectCard = ({ project, totalCount, onViewDetails }) => {
  if (!project) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group relative grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-primary/40"
    >
      {/* Left accent bar from original design */}
      <span className="absolute inset-y-0 left-0 z-10 w-[2px] bg-white/10 transition-colors duration-500 group-hover:bg-primary" />

      {/* Responsive Image Split View */}
      <div className="relative min-h-[180px] sm:min-h-[220px] md:col-span-5 md:min-h-[260px] lg:col-span-5 w-full overflow-hidden">
        <ScanImage src={project.thumbnail} alt={project.title}>
          <span className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.3em] text-primary sm:left-8 sm:top-8 sm:text-[12px]">
            Featured
          </span>
        </ScanImage>
      </div>

      {/* Content Block */}
      <div className="flex flex-col justify-between p-4 sm:p-5 lg:p-6 xl:p-8 md:col-span-7 lg:col-span-7">
        <div>
          <div className="flex items-center justify-between">
            <IndexTag index={1} totalCount={totalCount} />
            <ProjectStatus status={project.status_display} />
          </div>

          <p className="mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-primary sm:mt-4">
            {project.category?.name}
          </p>

          <h3 className="mt-2 text-xl font-bold leading-tight sm:text-2xl lg:text-3xl xl:text-4xl text-white">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm leading-6 text-muted sm:mt-3 md:text-base md:leading-7 max-w-xl">
            {project.short_description}
          </p>

          <div className="mt-4 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5 md:mt-8">
            <ProjectTechStack technologies={project.technologies} />
          </div>
        </div>

        {/* Actions Tray */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-7 sm:gap-3 md:mt-10 md:gap-4">
          {project.live_url && (
            <Button
              rightIcon={<ExternalLink size={18} />}
              onClick={() => window.open(project.live_url, "_blank")}
            >
              Live Demo
            </Button>
          )}

          {project.github_url && (
            <Button
              variant="secondary"
              leftIcon={<FaGithub size={18} />}
              onClick={() => window.open(project.github_url, "_blank")}
            >
              Source Code
            </Button>
          )}

          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => onViewDetails?.(project.slug)}
            className="ml-auto flex items-center gap-2 font-semibold text-primary cursor-pointer"
          >
            View Details
            <ArrowUpRight size={20} />
          </motion.button>
        </div>

      </div>
    </motion.article>
  );
};

export default React.memo(FeaturedProjectCard);