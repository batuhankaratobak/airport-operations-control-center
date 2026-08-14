import type { FlightStatus } from "@/lib/types";
import { formatStatus } from "@/lib/utils/format";

export function FlightStatusBadge({ status }: { status: FlightStatus }) {
  return <span className={`status-badge status-${status}`}><i />{formatStatus(status)}</span>;
}
