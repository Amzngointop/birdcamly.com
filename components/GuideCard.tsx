import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BadgeChip } from "./EditorChoiceBadge";

interface GuideCardProps {
  slug: string;
  title: string;
  tag: string;
  readTime: string;
  intro?: string;
  basePath?: "best" | "guides";
}

export function GuideCard({ slug, title, tag, readTime, intro, basePath = "guides" }: GuideCardProps) {
  const href = basePath === "best" ? `/best/${slug}` : `/guides/${slug}`;
  return (
    <div
      className="rounded-xl border overflow-hidden flex flex-col gap-3 transition-shadow hover:shadow-md"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      }}
    >
      <img
        src={`/guides/${slug}.jpg`}
        alt={title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div className="px-5 pb-5 flex flex-col gap-3 flex-1">
      <div className="flex items-center justify-between gap-2">
        <BadgeChip label={tag} color="green" />
        <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-secondary)" }}>
          <Clock className="w-3 h-3" /> {readTime}
        </span>
      </div>
      <h3 className="text-lg font-semibold leading-snug" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
        {title}
      </h3>
      {intro && <p className="text-sm line-clamp-2" style={{ color: "var(--text-secondary)" }}>{intro}</p>}
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-semibold mt-auto"
        style={{ color: "var(--accent)" }}
      >
        Read {basePath === "best" ? "Review" : "Guide"} <ArrowRight className="w-4 h-4" />
      </Link>
      </div>
    </div>
  );
}
