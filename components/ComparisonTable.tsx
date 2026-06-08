import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Product } from "@/data/products";

interface ComparisonTableProps {
  products: Product[];
}

export function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: "var(--bg-alt)", borderBottom: `1px solid var(--border)` }}>
            <th className="text-left px-4 py-3 font-semibold" style={{ color: "var(--text-primary)" }}>Product</th>
            <th className="text-left px-4 py-3 font-semibold" style={{ color: "var(--text-primary)" }}>Best For</th>
            <th className="text-left px-4 py-3 font-semibold" style={{ color: "var(--text-primary)" }}>Top Pro</th>
            <th className="text-left px-4 py-3 font-semibold" style={{ color: "var(--text-primary)" }}>Top Con</th>
            <th className="text-left px-4 py-3 font-semibold" style={{ color: "var(--text-primary)" }}>Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr
              key={product.id}
              style={{
                backgroundColor: idx % 2 === 0 ? "var(--card-bg)" : "var(--bg-primary)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <td className="px-4 py-3 font-medium" style={{ color: "var(--text-primary)" }}>
                <div>
                  {product.name}
                  {product.badge && (
                    <span
                      className="ml-2 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: "var(--badge-amber)", color: "white" }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3" style={{ color: "var(--text-secondary)" }}>{product.bestFor}</td>
              <td className="px-4 py-3" style={{ color: "var(--text-secondary)" }}>{product.pros[0]}</td>
              <td className="px-4 py-3" style={{ color: "var(--text-secondary)" }}>{product.cons[0]}</td>
              <td className="px-4 py-3">
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1 font-semibold text-xs hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Amazon <ExternalLink className="w-3 h-3" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
