import React from "react";

const STATUS_CONFIG = {
  Live: { pulse: true, dotClass: "bg-emerald-500" },
  "In Development": { pulse: false, dotClass: "bg-amber-500/80" },
  Maintenance: { pulse: false, dotClass: "bg-red-500/80" },
  Archived: { pulse: false, dotClass: "bg-zinc-600" },
};

const ProjectStatus = ({ status = "Live" }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG["Archived"];

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400">
      <span className="relative flex h-1.5 w-1.5">
        {config.pulse && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
        )}
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${config.dotClass}`} />
      </span>
      {status}
    </span>
  );
};

export default React.memo(ProjectStatus);