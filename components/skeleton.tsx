
export function PageSkeleton() {
  return (
    <div className="flex flex-col gap-20 animate-pulse">
      {/* Hero skeleton */}
      <div className="h-[60vh] w-full bg-gray-200" />
      {/* Content skeleton */}
      <div className="max-w-5xl mx-auto w-full px-8 flex flex-col gap-4">
        <div className="h-8 w-1/3 bg-gray-200 rounded" />
        <div className="h-4 w-2/3 bg-gray-200 rounded" />
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
      </div>
    </div>
  );
}