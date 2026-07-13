import React from "react";
import { FolderSearch } from "lucide-react";

const EmptyProjects = ({
  title = "No Projects Found",
  description = "Projects will appear here once they are available.",
}) => {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center border border-white/10 bg-white/[0.02] px-8 py-16 text-center">

      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-primary/10">
        <FolderSearch
          size={38}
          className="text-primary"
        />
      </div>

      <h3 className="text-3xl font-bold">
        {title}
      </h3>

      <p className="mt-4 max-w-xl text-base leading-8 text-muted">
        {description}
      </p>

    </div>
  );
};

export default React.memo(EmptyProjects);