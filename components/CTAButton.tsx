import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
}

export function CTAButton({ href, children, variant = "primary", external = false, className = "" }: CTAButtonProps) {
  const base = "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors";

  const styles: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: "var(--accent)", color: "white" },
    secondary: { backgroundColor: "var(--accent-secondary)", color: "white" },
    outline: { backgroundColor: "transparent", color: "var(--accent)", border: "1.5px solid var(--accent)" },
  };

  const hoverClass =
    variant === "primary"
      ? "hover:opacity-90"
      : variant === "secondary"
      ? "hover:opacity-90"
      : "hover:bg-[#3A6B35] hover:text-white";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`${base} ${hoverClass} ${className}`}
        style={styles[variant]}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${hoverClass} ${className}`} style={styles[variant]}>
      {children}
    </Link>
  );
}
