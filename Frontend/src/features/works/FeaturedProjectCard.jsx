import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Button from "../../components/ui/Button";

import IndexTag from "./IndexTag";
import ProjectStatus from "./ProjectStatus";
import ProjectTechStack from "./ProjectTechStack";
import ScanImage from "./ScanImage";

const FeaturedProjectCard = ({
  project,
  totalCount,
  onViewDetails,
}) => {
  if (!project) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group relative grid overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-primary/40 lg:grid-cols-2"
    >
      {/* left accent bar */}
      <span className="absolute inset-y-0 left-0 z-10 w-[2px] bg-white/10 transition-colors duration-500 group-hover:bg-primary" />

      {/* Image */}
      <div className="relative min-h-[240px] lg:min-h-[320px]">
        <ScanImage
          src={project.thumbnail}
          alt={project.title}
          sweepDistance={460}
        >
          <span className="absolute left-8 top-8 font-mono text-[12px] uppercase tracking-[0.3em] text-primary">
            Featured
          </span>
        </ScanImage>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 lg:p-8">

        <div>

          <div className="flex items-center justify-between">
            <IndexTag
              index={1}
              totalCount={totalCount}
            />

            <ProjectStatus
              status={project.status_display}
            />
          </div>

          <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            {project.category?.name}
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight lg:text-4xl">
            {project.title}
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-6 text-muted md:text-base md:leading-7">
            {project.short_description}
          </p>

          <div className="mt-5 border-t border-white/10 pt-5 md:mt-8">
            <ProjectTechStack
              technologies={project.technologies}
            />
          </div>

        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">

          {project.live_url && (
            <Button
              rightIcon={<ExternalLink size={18} />}
              onClick={() =>
                window.open(project.live_url, "_blank")
              }
            >
              Live Demo
            </Button>
          )}

          {project.github_url && (
            <Button
              variant="secondary"
              leftIcon={<FaGithub size={18} />}
              onClick={() =>
                window.open(project.github_url, "_blank")
              }
            >
              Source Code
            </Button>
          )}

          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => onViewDetails?.(project)}
            className="ml-auto flex items-center gap-2 font-semibold text-primary"
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