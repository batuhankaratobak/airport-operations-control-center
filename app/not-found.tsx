import Link from "next/link";
export default function NotFound() { return <div className="error-state"><h2>Flight not found</h2><p>This flight may no longer be in today’s operating schedule.</p><Link href="/flights">Return to flights</Link></div>; }
