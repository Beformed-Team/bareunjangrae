import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";

const TESTIMONIALS = [
  {
    body: "처음에는 ‘이 가격이 가능한가’ 의심했는데, 영수증을 그대로 보여주시니 오히려 마음이 편했습니다.",
    name: "김O식 님",
    role: "세종 · 빈소장 의뢰",
  },
  {
    body: "패키지에 끌려가지 않고 필요한 것만 골라서 했더니, 같은 일정인데 비용이 절반이었습니다.",
    name: "하O현 님",
    role: "천안 · 가족장 의뢰",
  },
  {
    body: "야간에 연락드렸는데 바로 받아주시고, 끝까지 차분하게 진행해 주셨습니다.",
    name: "박O준 님",
    role: "오송 · 무빈소 가족장",
  },
];

export function Testimonials() {
  return (
    <section className="bg-navy-gradient py-20 text-white md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="유족의 목소리"
          title="끝나고 나서야 진짜 평가가 시작됩니다"
          description="장례를 마친 가족분들이 남겨주신 말씀입니다."
          invert
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <li
              key={i}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <Quote
                className="h-8 w-8 text-gold/70"
                aria-hidden="true"
              />
              <p className="mt-5 text-base leading-relaxed text-white/85">
                “{t.body}”
              </p>
              <div className="mt-8 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/60">{t.role}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-white/50">
          * 후기는 유족 분들의 동의 하에 게재되며, 실제 사례 확보 후 교체됩니다.
        </p>
      </div>
    </section>
  );
}
