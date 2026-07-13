import React from "react";

const ProjectTechStack = ({ technologies = [] }) => {
  if (!technologies.length) {
    return (
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted/70">
        No Technologies
      </p>
    );
  }

  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted/70">
      {technologies.map((tech, index) => (
        <span key={tech.id}>
          {tech.name}

          {index < technologies.length - 1 && (
            <span className="mx-2 text-white/20">/</span>
          )}
        </span>
      ))}
    </p>
  );
};

export default React.memo(ProjectTechStack);