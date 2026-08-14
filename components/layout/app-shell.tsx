import type { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { Header } from "./header";

export function AppShell({ children }: { children: ReactNode }) {
  return <div className="app-shell"><AppSidebar /><div className="main-shell"><Header /><main className="page-content">{children}</main></div></div>;
}
