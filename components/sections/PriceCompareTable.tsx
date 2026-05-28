import pricing from "@/content/pricing.json";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function PriceCompareTable({ compact = false }: { compact?: boolean }) {
  const cols = [pricing.barun, pricing.package];
  const rows = pricing.barun.items.length;

  return (
    <div className={cn("overflow-x-auto", compact ? "" : "border border-navy-100")}>
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr>
            <th
              scope="col"
              className="w-1/3 bg-navy-50 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-navy"
            >
              항목
            </th>
            {cols.map((c) => (
              <th
                key={c.label}
                scope="col"
                className={cn(
                  "px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]",
                  c.highlight
                    ? "bg-navy text-gold"
                    : "bg-navy-50 text-navy-500",
                )}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => {
            const a = pricing.barun.items[i];
            const b = pricing.package.items[i];
            return (
              <tr key={i} className="border-t border-navy-100">
                <th
                  scope="row"
                  className="bg-white px-5 py-5 align-top text-navy"
                >
                  {a.name}
                </th>
                <td className="bg-gold-50 px-5 py-5 align-top">
                  <div className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-navy">{a.price}</p>
                      <p className="mt-1 text-xs text-navy-500">{a.note}</p>
                    </div>
                  </div>
                </td>
                <td className="bg-white px-5 py-5 align-top">
                  <div className="flex items-start gap-2">
                    <X
                      className="mt-0.5 h-4 w-4 shrink-0 text-navy-300"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-navy-500">{b.name}</p>
                      <p className="text-navy-500">{b.price}</p>
                      <p className="mt-1 text-xs text-navy-300">{b.note}</p>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
