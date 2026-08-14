"use client";

import { AlertTriangle, Check, Clock3, MapPin } from "lucide-react";
import type { Alert } from "@/lib/types";
import { useOperationsStore } from "@/lib/store/use-operations-store";

export function AlertCard({ alert }: { alert: Alert }) {
  const resolvedAlertIds = useOperationsStore((state) => state.resolvedAlertIds);
  const toggleAlert = useOperationsStore((state) => state.toggleAlert);
  const resolved = alert.resolved || resolvedAlertIds.includes(alert.id);
  return <article className={`alert-card ${resolved ? "resolved" : ""}`} aria-label={`${alert.severity} severity ${alert.category} alert`}><span className={`alert-icon ${alert.severity}`}><AlertTriangle size={19} aria-hidden="true"/></span><div className="alert-body"><div className="alert-title"><span className={`severity ${alert.severity}`}>{alert.severity}</span><strong>{alert.category}</strong></div><p>{alert.message}</p><div className="alert-meta"><span><Clock3 size={14} aria-hidden="true"/>{alert.timestamp} today</span><span><MapPin size={14} aria-hidden="true"/>{alert.location}</span></div></div><button type="button" className={resolved ? "resolved-button" : "resolve-button"} onClick={() => !alert.resolved && toggleAlert(alert.id)} disabled={alert.resolved}>{resolved && <Check size={15} aria-hidden="true"/>} {resolved ? "Resolved" : "Mark resolved"}</button></article>;
}
