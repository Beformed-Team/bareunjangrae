import { ShieldCheck, Receipt, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "정찰 인건비",
    description:
      "장례지도사 1일 25만 원, 시간 단위 추가 청구도 없습니다. 정해진 금액만큼만 받습니다.",
  },
  {
    icon: Receipt,
    title: "원가 실비 공개",
    description:
      "꽃·상복·관·차량 모든 품목의 거래처 영수증을 그대로 공유합니다. 중간 마진 0원.",
  },
  {
    icon: HeartHandshake,
    title: "유족 중심 진행",
    description:
      "패키지가 아닌, 가족의 상황과 예산에 맞춰 필요한 부분만 함께 설계해 드립니다.",
  },
];

export function Values() {
  return (
    <section id="values" className="bg-cream py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="우리의 약속"
          title="세 가지 기준으로 다르게 진행합니다"
          description="장례라는 무거운 시간에 가격이 짐이 되지 않도록, 처음부터 끝까지 같은 기준을 지킵니다."
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
