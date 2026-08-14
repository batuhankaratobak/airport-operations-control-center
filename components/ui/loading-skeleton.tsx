export function LoadingSkeleton({ rows = 4 }: { rows?: number }) {
  return <div className="loading-stack" aria-label="Loading content">{Array.from({ length: rows }, (_, index) => <div className="skeleton-row" key={index}><i/><span/><b/></div>)}</div>;
}
