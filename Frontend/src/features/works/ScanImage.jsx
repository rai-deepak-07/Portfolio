import React, { useState } from "react";

const ScanImage = ({ src, alt, children }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-white/[0.02]">
      <img
        src={imageError || !src ? "/images/project-placeholder.png" : src}
        alt={alt}
        loading="lazy"
        onError={() => setImageError(true)}
        className="h-full w-full object-cover grayscale-[15%] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      {/* Dynamic, responsive laser scan layer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary opacity-0 shadow-[0_0_12px_1px_rgba(91,140,255,0.6)] transition-all duration-[900ms] ease-out group-hover:translate-y-[450px] group-hover:opacity-100" />

      {children}
    </div>
  );
};

export default React.memo(ScanImage);