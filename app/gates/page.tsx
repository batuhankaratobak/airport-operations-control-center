import type { Metadata } from "next";
import { CircleDot, Hammer, Plane, Workflow } from "lucide-react";
import { GateGrid } from "@/components/gates/gate-grid";
import { gateService } from "@/lib/services/gate-service";

export const metadata: Metadata = { title: "Gates" };

export default async function GatesPage() {
  const gates = await gateService.getAll();
  const summary = [{ label: "Total gates", value: gates.length, icon: Workflow }, { label: "Available", value: gates.filter((gate) => gate.status === "available").length, icon: CircleDot }, { label: "In use", value: gates.filter((gate) => ["occupied", "boarding"].includes(gate.status)).length, icon: Plane }, { label: "Maintenance", value: gates.filter((gate) => gate.status === "maintenance").length, icon: Hammer }];
  return <div><div className="content-heading"><div><h2>Gate allocation</h2><p>Live status across international terminals.</p></div><span className="live-chip"><i/>Live data</span></div><div className="mini-stats">{summary.map(({ label, value, icon: Icon }) => <div key={label}><span><Icon size={18}/></span><p>{label}<strong>{value}</strong></p></div>)}</div><GateGrid gates={gates}/></div>;
}
