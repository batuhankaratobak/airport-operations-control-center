import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function StatCard({ label, value, note, trend, icon: Icon, tone = "blue" }: { label: string; value: number; note: string; trend?: "up" | "down"; icon: LucideIcon; tone?: "blue" | "teal" | "amber" | "rose" }) {
  return <article className="stat-card"><div className={`stat-icon ${tone}`}><Icon size={19}/></div><div className="stat-top"><span>{label}</span><strong>{value}</strong></div><p>{trend === "up" ? <ArrowUpRight size={14}/> : trend === "down" ? <ArrowDownRight size={14}/> : null}{note}</p></article>;
}
