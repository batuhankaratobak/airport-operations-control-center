import type { Metadata } from "next";
import { AlertsList } from "@/components/alerts/alerts-list";
import { alertService } from "@/lib/services/alert-service";

export const metadata: Metadata = { title: "Alerts" };

export default async function AlertsPage() {
  const alerts = await alertService.getAll();
  return <div><div className="content-heading"><div><h2>Incident log</h2><p>Review, track and resolve operational issues.</p></div><span className="live-chip"><i/>Monitoring</span></div><AlertsList alerts={alerts}/></div>;
}
