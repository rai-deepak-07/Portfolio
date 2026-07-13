import React from "react";

const STATUS_CONFIG = {
  Live: {
    pulse: true,
    dotClass: "bg-primary",
  },
  "In Development": {
    pulse: false,
    dotClass: "border border-white/30 bg-transparent",
  },
  Maintenance: {
    pulse: false,
    dotClass: "border border-white/30 bg-transparent",
  },
  Archived: {
    pulse: false,
    dotClass: "border border-white/30 bg-transparent",
  },
};

const ProjectStatus = ({ status = "Live" }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG["Archived"];

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
      <span className="relative flex h-1.5 w-1.5">
        {config.pulse && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
        )}

        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${config.dotClass}`}
        />
      </span>

      {status}
    </span>
  );
};

export default React.memo(ProjectStatus);