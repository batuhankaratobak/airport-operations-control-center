"use client";

import { Search, X } from "lucide-react";

export function SearchInput({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) {
  return <label className="search-input"><Search size={18} aria-hidden="true" /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} aria-label={placeholder} />{value && <button type="button" onClick={() => onChange("")} aria-label="Clear search"><X size={16} aria-hidden="true"/></button>}</label>;
}
