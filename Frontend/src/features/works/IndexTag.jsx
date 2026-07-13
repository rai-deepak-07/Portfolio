import React from "react";

const IndexTag = ({ index, totalCount }) => {
  return (
    <span className="font-mono text-xs tracking-[0.2em] text-muted">
      {String(index).padStart(2, "0")}
      <span className="text-white/20">
        {" "}
        / {String(totalCount).padStart(2, "0")}
      </span>
    </span>
  );
};

export default React.memo(IndexTag);