import { Check, X, ExternalLink } from "lucide-react";
import { Product } from "@/data/products";
import { EditorChoiceBadge, BadgeChip } from "./EditorChoiceBadge";
import { CTAButton } from "./CTAButton";

interface ProductCardProps {
  product: Product;
  showRank?: boolean;
}

export function ProductCard({ product, showRank = true }: ProductCardProps) {
  const badgeColorMap: Record<string, "green" | "red" | "amber" | "gray"> = {
    "Editor's Choice": "amber",
    "Best Value": "green",
    "Top Rated": "green",
    "Budget Pick": "gray",
  };

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      }}
    >
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            width: "100%",
            maxHeight: "280px",
            objectFit: "contain",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            marginBottom: "16px",
            padding: "12px",
          }}
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            {product.badge === "Editor's Choice" ? (
              <EditorChoiceBadge size="sm" />
            ) : (
              <BadgeChip label={product.badge} color={badgeColorMap[product.badge] ?? "gray"} />
            )}
          </div>
        )}
        {showRank && (
          <div
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {product.rank}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
            {product.bestFor}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
          {product.name}
        </h3>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          {product.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-secondary)" }}>Pros</p>
            <ul className="space-y-1.5">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-1.5 text-sm" style={{ color: "var(--text-primary)" }}>
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#3A6B35" }} />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-secondary)" }}>Cons</p>
            <ul className="space-y-1.5">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-1.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <X className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--accent-secondary)" }} />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CTAButton href={product.affiliateLink} external className="w-full justify-center">
          View on Amazon <ExternalLink className="w-4 h-4" />
        </CTAButton>
      </div>
    </div>
  );
}
