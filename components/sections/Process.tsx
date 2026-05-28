import { SectionHeading } from "@/components/layout/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "전화·카톡 상담",
    desc: "24시간 언제든 연락 주세요. 상황을 들은 뒤 가능한 절차와 예상 비용을 정직하게 안내합니다.",
  },
  {
    n: "02",
    title: "맞춤 견적 제안",
    desc: "가족 규모·예산·희망 형식을 바탕으로, 꼭 필요한 항목만 골라 견적을 만들어 드립니다.",
  },
  {
    n: "03",
    title: "장례 진행 동행",
    desc: "임종부터 발인까지 장례지도사가 동행하며, 모든 품목은 원가 영수증을 즉시 공유합니다.",
  },
  {
    n: "04",
    title: "정산 · 사후 안내",
    desc: "최종 정산은 영수증 합산 기준. 49재·납골 안내 등 이후 절차도 부담 없이 도와드립니다.",
  },
];

export function Process() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="진행 절차"
          title="첫 연락부터 마지막 정산까지, 단 4단계"
          description="과정마다 무엇이 청구되고 무엇이 청구되지 않는지를 미리 알려드립니다."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy-100 bg-navy-100 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-white p-8">
              <p className="font-serif text-3xl text-gold">{s.n}</p>
              <h3 className="mt-4 font-serif text-xl text-navy">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-500">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
