import React from "react";
import { FolderSearch } from "lucide-react";

const EmptyProjects = ({
  title = "No Projects Found",
  description = "Projects will appear here once they are available.",
}) => {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center px-6 py-10 text-center sm:min-h-[320px] sm:py-12">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-muted">
        <FolderSearch size={22} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-bold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-1.5 max-w-sm text-xs sm:text-sm text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default React.memo(EmptyProjects);