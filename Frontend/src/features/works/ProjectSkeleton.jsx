import React from "react";

const SkeletonLine = ({ className = "" }) => (
  <div
    className={`animate-pulse rounded bg-white/10 ${className}`}
  />
);

const FeaturedSkeleton = () => {
  return (
    <article className="relative grid overflow-hidden border border-white/10 bg-white/[0.02] lg:grid-cols-2">

      <span className="absolute inset-y-0 left-0 w-[2px] bg-white/10" />

      {/* Image */}
      <div className="min-h-[240px] bg-white/[0.03] lg:min-h-[320px] animate-pulse" />

      {/* Content */}
      <div className="flex flex-col justify-between p-6 lg:p-8">

        <div>

          <div className="flex items-center justify-between">
            <SkeletonLine className="h-4 w-16" />
            <SkeletonLine className="h-4 w-20" />
          </div>

          <SkeletonLine className="mt-5 h-3 w-28" />

          <SkeletonLine className="mt-3 h-10 w-3/4" />

          <SkeletonLine className="mt-5 h-4 w-full" />
          <SkeletonLine className="mt-2 h-4 w-5/6" />
          <SkeletonLine className="mt-2 h-4 w-2/3" />

          <div className="mt-8 border-t border-white/10 pt-5">
            <SkeletonLine className="h-3 w-3/4" />
          </div>

        </div>

        <div className="mt-10 flex gap-4">

          <SkeletonLine className="h-11 w-36 rounded-full" />

          <SkeletonLine className="h-11 w-36 rounded-full" />

          <SkeletonLine className="ml-auto h-11 w-32 rounded-full" />

        </div>

      </div>

    </article>
  );
};

const CardSkeleton = () => {
  return (
    <article className="overflow-hidden border border-white/10 bg-white/[0.02]">

      <div className="h-52 animate-pulse bg-white/[0.03]" />

      <div className="p-6">

        <div className="flex items-center justify-between">
          <SkeletonLine className="h-3 w-14" />
          <SkeletonLine className="h-3 w-20" />
        </div>

        <SkeletonLine className="mt-5 h-3 w-24" />

        <SkeletonLine className="mt-3 h-7 w-2/3" />

        <SkeletonLine className="mt-5 h-3 w-full" />
        <SkeletonLine className="mt-2 h-3 w-5/6" />
        <SkeletonLine className="mt-2 h-3 w-3/4" />

        <div className="mt-5 border-t border-white/10 pt-4">
          <SkeletonLine className="h-3 w-full" />
        </div>

        <div className="mt-6 flex items-center justify-between">

          <SkeletonLine className="h-4 w-20" />

          <SkeletonLine className="h-6 w-6 rounded-full" />

        </div>

      </div>

    </article>
  );
};

const ProjectSkeleton = () => {
  return (
    <div className="space-y-6">

      <FeaturedSkeleton />

      <div className="grid gap-6 md:grid-cols-3">

        <CardSkeleton />

        <CardSkeleton />

        <CardSkeleton />

      </div>

    </div>
  );
};

export default React.memo(ProjectSkeleton);