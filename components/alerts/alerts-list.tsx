"use client";

import type { Alert } from "@/lib/types";
import { useOperationsStore } from "@/lib/store/use-operations-store";
import { AlertCard } from "./alert-card";

export function AlertsList({ alerts }: { alerts: Alert[] }) {
  const resolvedAlertIds = useOperationsStore((state) => state.resolvedAlertIds);
  const open = alerts.filter((alert) => !alert.resolved && !resolvedAlertIds.includes(alert.id));
  const resolved = alerts.filter((alert) => alert.resolved || resolvedAlertIds.includes(alert.id));
  return <div className="alerts-sections"><section><div className="list-title"><h2>Active alerts</h2><span>{open.length} open</span></div><div className="alerts-list">{open.map((alert) => <AlertCard alert={alert} key={alert.id}/>)}</div></section><section><div className="list-title muted"><h2>Resolved today</h2><span>{resolved.length} items</span></div><div className="alerts-list">{resolved.map((alert) => <AlertCard alert={alert} key={alert.id}/>)}</div></section></div>;
}
