import { SearchX } from "lucide-react";

export function EmptyState({ title = "No results found", message = "Try adjusting your search or filters." }: { title?: string; message?: string }) {
  return <div className="empty-state"><span><SearchX size={24}/></span><h3>{title}</h3><p>{message}</p></div>;
}
