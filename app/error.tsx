"use client";
import { AlertTriangle } from "lucide-react";
export default function ErrorPage({ reset }: { error: Error; reset: () => void }) { return <div className="error-state"><span><AlertTriangle size={26}/></span><h2>Unable to load operations data</h2><p>The dashboard encountered a temporary issue.</p><button type="button" onClick={reset}>Try again</button></div>; }
