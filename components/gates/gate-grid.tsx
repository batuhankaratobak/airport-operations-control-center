"use client";

import type { Gate } from "@/lib/types";
import { useOperationsStore } from "@/lib/store/use-operations-store";
import { FilterSelect } from "@/components/ui/filter-select";
import { GateCard } from "./gate-card";

export function GateGrid({ gates }: { gates: Gate[] }) {
  const selectedTerminal = useOperationsStore((state) => state.selectedTerminal);
  const setSelectedTerminal = useOperationsStore((state) => state.setSelectedTerminal);
  const filtered = selectedTerminal === "all" ? gates : gates.filter((gate) => gate.terminal === selectedTerminal);
  return <><div className="gate-toolbar"><p><strong>{filtered.length}</strong> gates in view</p><FilterSelect label="Terminal" value={selectedTerminal} onChange={setSelectedTerminal} options={[{ value: "all", label: "All terminals" }, { value: "T1", label: "Terminal 1" }, { value: "T2", label: "Terminal 2" }]}/></div><div className="gate-grid">{filtered.map((gate) => <GateCard gate={gate} key={gate.id}/>)}</div></>;
}
