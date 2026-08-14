"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BookOpen, DoorOpen, LayoutDashboard, Plane } from "lucide-react";

const titles: Record<string, { title: string; eyebrow: string }> = {
  "/": { title: "Operations Overview", eyebrow: "Antalya International · AYT" },
  "/flights": { title: "Flight Operations", eyebrow: "Live schedule management" },
  "/gates": { title: "Gate Management", eyebrow: "Terminal resource allocation" },
  "/alerts": { title: "Operational Alerts", eyebrow: "Active incidents and notices" },
  "/airport-guide": { title: "Airport Guide", eyebrow: "Operational reference" },
};

const mobileLinks = [
  ["/", "Overview", LayoutDashboard], ["/flights", "Flights", Plane],
  ["/gates", "Gates", DoorOpen], ["/alerts", "Alerts", Bell],
  ["/airport-guide", "Guide", BookOpen],
] as const;

export function Header() {
  const pathname = usePathname();
  const key = pathname.startsWith("/flights/") ? "/flights" : pathname;
  const current = titles[key] ?? titles["/"];
  return <>
    <header className="topbar">
      <div><p>{current.eyebrow}</p><h1>{pathname.startsWith("/flights/") ? "Flight Detail" : current.title}</h1></div>
      <div className="topbar-actions"><span className="live-chip"><i /> Live operations</span><Link href="/alerts" className="icon-button" aria-label="View 3 operational notifications"><Bell size={19} aria-hidden="true" /><b>3</b></Link><div className="avatar" aria-label="Operations Control user">OC</div></div>
    </header>
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {mobileLinks.map(([href, label, Icon]) => { const active = href === "/" ? pathname === "/" : pathname.startsWith(href); return <Link href={href} key={href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}><Icon size={19} aria-hidden="true"/><span>{label}</span></Link>; })}
    </nav>
  </>;
}
