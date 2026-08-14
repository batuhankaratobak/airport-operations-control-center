import { CheckCircle2, CloudSun, Gauge, Wind } from "lucide-react";

const metrics = [
  { label: "Runways", value: "2 / 2 open", icon: CheckCircle2, tone: "good" },
  { label: "Avg. departure delay", value: "8 min", icon: Gauge, tone: "good" },
  { label: "Weather", value: "Clear · 29°C", icon: CloudSun, tone: "neutral" },
  { label: "Wind", value: "SW 12 kt", icon: Wind, tone: "neutral" },
];

export function AirportStatus() {
  return <section className="panel status-panel"><div className="section-heading"><div><p>Airfield & conditions</p><h2>Airport status</h2></div><span className="operational-pill"><i/>Operational</span></div><div className="airport-metrics">{metrics.map(({ label, value, icon: Icon, tone }) => <div className="airport-metric" key={label}><span className={tone}><Icon size={18}/></span><div><small>{label}</small><strong>{value}</strong></div></div>)}</div><div className="capacity"><div><span>Terminal capacity</span><strong>68%</strong></div><div className="capacity-track"><i /></div><p>Passenger flow remains within normal operating range.</p></div></section>;
}
