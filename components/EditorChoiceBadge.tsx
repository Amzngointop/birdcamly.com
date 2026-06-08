import { Star } from "lucide-react";

interface EditorChoiceBadgeProps {
  label?: string;
  size?: "sm" | "md";
}

export function EditorChoiceBadge({ label = "Editor's Choice", size = "md" }: EditorChoiceBadgeProps) {
  const sizeClass = size === "sm" ? "text-[10px] px-2 py-0.5 gap-1" : "text-xs px-3 py-1 gap-1.5";
  return (
    <span
      className={`inline-flex items-center font-semibold uppercase tracking-wider rounded-full ${sizeClass}`}
      style={{ backgroundColor: "var(--badge-amber)", color: "white" }}
    >
      <Star className={size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3"} fill="white" />
      {label}
    </span>
  );
}

export function BadgeChip({ label, color = "green" }: { label: string; color?: "green" | "red" | "amber" | "gray" }) {
  const colorMap: Record<string, React.CSSProperties> = {
    green: { backgroundColor: "var(--bg-alt)", color: "var(--accent)", border: "1px solid var(--border)" },
    red: { backgroundColor: "#FEF2F0", color: "var(--accent-secondary)", border: "1px solid #F5C4B8" },
    amber: { backgroundColor: "#FEF9EE", color: "var(--badge-amber)", border: "1px solid #F4D98A" },
    gray: { backgroundColor: "#F3F4F6", color: "var(--text-secondary)", border: "1px solid var(--border)" },
  };
  return (
    <span
      className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
      style={colorMap[color]}
    >
      {label}
    </span>
  );
}
