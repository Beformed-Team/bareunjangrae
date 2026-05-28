import { ShieldCheck, Receipt, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "장례지도사 하루 25만 원",
    description:
      "1일 25만 원으로 받습니다. 시간 단위로 추가하거나 야간 할증을 붙이지 않습니다.",
  },
  {
    icon: Receipt,
    title: "꽃·상복·관·차량은 원가 그대로",
    description:
      "거래처에서 받은 영수증을 그대로 보여드리고, 그 금액으로만 정산합니다.",
  },
  {
    icon: HeartHandshake,
    title: "패키지 대신, 가족 일정에 맞춰",
    description:
      "가족 규모와 예산을 듣고, 필요한 항목만 골라서 진행합니다.",
  },
];

export function Values() {
  return (
    <section id="values" className="bg-cream py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="이렇게 일합니다"
          title="이 세 가지는 처음부터 끝까지 그대로 갑니다"
          description="장례 비용이 가족에게 또 다른 짐이 되지 않도록, 처음 안내한 금액과 실제 영수증을 똑같이 맞춥니다."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-8 transition-all hover:border-gold hover:shadow-soft"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center border border-gold/60 bg-white text-gold">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-500">
                {description}
              </p>
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
