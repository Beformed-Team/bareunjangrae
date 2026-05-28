import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.25em]",
            invert ? "text-gold" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance font-serif text-3xl leading-tight md:text-4xl",
          invert ? "text-white" : "text-navy",
          "gold-divider",
          align === "center" && "gold-divider-center",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed",
            invert ? "text-white/75" : "text-navy-500",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
