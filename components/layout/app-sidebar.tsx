"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BookOpen, DoorOpen, LayoutDashboard, Plane, RadioTower } from "lucide-react";

const links = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/flights", label: "Flights", icon: Plane },
  { href: "/gates", label: "Gates", icon: DoorOpen },
  { href: "/alerts", label: "Alerts", icon: Bell },
  { href: "/airport-guide", label: "Airport guide", icon: BookOpen },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark"><RadioTower size={20} /></span>
        <span><strong>AOCC</strong><small>Airport Operations</small></span>
      </div>
      <nav className="nav-list" aria-label="Primary navigation">
        {links.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return <Link className={`nav-link ${active ? "active" : ""}`} href={href} key={href} aria-current={active ? "page" : undefined}><Icon size={19} aria-hidden="true" /><span>{label}</span>{label === "Alerts" && <em aria-label="3 active alerts">3</em>}</Link>;
        })}
      </nav>
      <div className="sidebar-footer">
        <span className="status-dot" />
        <div><strong>Systems operational</strong><small>Last sync · 09:02</small></div>
      </div>
    </aside>
  );
}
