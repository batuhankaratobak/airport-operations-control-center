import { Clock3, Plane } from "lucide-react";
import type { Gate } from "@/lib/types";
import { formatStatus } from "@/lib/utils/format";

export function GateCard({ gate }: { gate: Gate }) {
  return <article className="gate-card"><div className="gate-head"><div><span>Gate</span><strong>{gate.number}</strong></div><span className={`gate-status ${gate.status}`}><i/>{formatStatus(gate.status)}</span></div><div className="gate-flight current"><small>Current flight</small>{gate.currentFlight ? <strong><Plane size={15}/>{gate.currentFlight}</strong> : <span>— No active flight</span>}</div><div className="gate-flight"><small>Next flight</small>{gate.nextFlight ? <strong><Clock3 size={15}/>{gate.nextFlight}<em>{gate.nextFlightTime}</em></strong> : <span>— Not scheduled</span>}</div><footer><span>{gate.terminal}</span><small>International</small></footer></article>;
}
