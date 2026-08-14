"use client";

export interface SelectOption { value: string; label: string }

export function FilterSelect({ value, onChange, options, label }: { value: string; onChange: (value: string) => void; options: SelectOption[]; label: string }) {
  return <label className="filter-select"><span className="sr-only">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label>;
}
