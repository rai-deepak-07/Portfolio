import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ExternalLink,
  Calendar,
  Layers,
  User,
  Building2,
  Tag,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Button from "../../components/ui/Button";
import ProjectStatus from "./ProjectStatus";
import { getProjectDetails } from "../../api/project";

function MetaCell({ icon: Icon, label, value }) {
  if (!value) return null;

  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-700/40 bg-slate-800/30 p-2">
      <Icon size={14} className="shrink-0 text-cyan-400" />
      <div className="min-w-0 leading-tight">
        <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p className="truncate text-xs font-semibold text-slate-200 mt-0.5">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function ProjectDetailsModal({ slug, onClose }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const open = Boolean(slug);

  useEffect(() => {
    if (!slug) {
      setProject(null);
      return;
    }

    const fetchProject = async () => {
      try {
        setLoading(true);
        const data = await getProjectDetails(slug);
        setProject(data);
      } catch (error) {
        console.error("Failed to load project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleClose = () => {
    setProject(null);
    onClose?.();
  };

  if (typeof document === "undefined") return null;

  if (loading) {
    return createPortal(
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 backdrop-blur-sm">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
      </div>,
      document.body
    );
  }

  return createPortal(
    <AnimatePresence>
      {open && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-[9998] bg-slate-950/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[9999] flex items-end justify-center p-2 sm:items-center sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative flex w-full flex-col overflow-hidden
                border border-slate-700/50 bg-[#0B132B] text-slate-100
                shadow-2xl rounded-2xl
                max-h-[90vh] sm:max-h-[80vh] sm:max-w-xl md:max-w-4xl
              "
            >
              {/* Micro Close Button */}
              <button
                onClick={handleClose}
                aria-label="Close"
                className="
                  absolute right-3 top-3 z-30
                  flex h-7 w-7 items-center justify-center rounded-md
                  border border-slate-700/60 bg-slate-900/60 text-slate-400
                  backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-white
                "
              >
                <X size={14} />
              </button>

              {/* Scroll Container (Scrollbar Hidden) */}
              <div className="overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                
                {/* 21st.dev Style Split Header Row */}
                <div className="flex flex-col sm:flex-row border-b border-slate-800">
                  
                  {/* Minified Image Frame */}
                  <div className="relative h-55 w-full shrink-0 bg-slate-900 sm:h-auto sm:w-48 md:w-60 overflow-hidden">
                    <img
                      src={project.thumbnail || "/images/project-placeholder.png"}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
                      onError={(e) => {
                        e.currentTarget.src = "/images/project-placeholder.png";
                      }}
                    />
                    <div className="absolute left-2 bottom-2">
                      <ProjectStatus status={project.status_display} />
                    </div>
                  </div>

                  {/* Primary Heading Meta */}
                  <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
                    <p className="flex items-center gap-1 font-mono text-[12px] font-medium tracking-wider text-cyan-400">
                      <Tag size={10} />
                      {project.category?.name}
                    </p>
                    <h2 className="mt-1 text-lg font-bold tracking-tight text-white md:text-xl">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400 line-clamp-2 sm:line-clamp-3">
                      {project.short_description}
                    </p>
                  </div>
                </div>

                {/* Lower Grid Details Panel */}
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 md:gap-5 md:p-5">
                  
                  {/* Main Description & Gallery Body */}
                  <div className="md:col-span-2 space-y-4">
                    {project.description && project.description !== project.short_description && (
                      <div>
                        <h4 className="font-mono text-[12px] text-slate-500 uppercase tracking-wider mb-1">Overview</h4>
                        <p className="text-xs text-justify leading-relaxed text-slate-300">
                          {project.description}
                        </p>
                      </div>
                    )}

                    {/* Compact Image Gallery Grid */}
                    {project.images?.length > 0 && (
                      <div>
                        <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">Gallery</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {project.images.map((image) => (
                            <div key={image.id} className="overflow-hidden rounded-md border border-slate-800 bg-slate-900">
                              <img
                                src={image.image}
                                alt="Screenshot"
                                className="aspect-video w-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side Info & CTA Bar */}
                  <div className="space-y-4 md:col-span-1">
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
                      <MetaCell icon={Calendar} label="Year" value={project.project_year} />
                      <MetaCell icon={Layers} label="Type" value={project.project_type_display} />
                      <MetaCell icon={User} label="Duration" value={project.duration} />
                      <MetaCell icon={Building2} label="Client" value={project.client} />
                    </div>

                    {/* Tech badget array */}
                    {project.technologies?.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech.id}
                            className="rounded bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-200 border border-slate-700/30"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Micro CTA Buttons */}
                    <div className="flex flex-row md:flex-col gap-2 pt-1">
                      {project.live_url && (
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="md" fullWidth={true} rightIcon={<ExternalLink size={12} />} className="text-xs">
                            Live Demo
                          </Button>
                        </a>
                      )}

                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="md" variant="secondary" fullWidth={true} leftIcon={<FaGithub size={12} />} className="text-xs">
                            Source
                          </Button>
                        </a>
                      )}
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}