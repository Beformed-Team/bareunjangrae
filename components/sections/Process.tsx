import { SectionHeading } from "@/components/layout/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "전화 또는 카톡 상담",
    desc: "야간·새벽에도 연락 주시면 됩니다. 상황을 듣고 어떻게 진행할 수 있는지, 비용은 어느 정도 예상되는지 먼저 알려드립니다.",
  },
  {
    n: "02",
    title: "필요한 것만 골라 견적",
    desc: "가족 인원과 예산, 희망하시는 규모에 맞춰 꼭 필요한 항목만 골라 견적을 정리해드립니다.",
  },
  {
    n: "03",
    title: "임종부터 발인까지 동행",
    desc: "장례지도사가 옆에서 함께 진행합니다. 그때그때 발생하는 영수증은 바로 공유해드립니다.",
  },
  {
    n: "04",
    title: "정산과 이후 안내",
    desc: "정산은 영수증 합산 금액 그대로 진행합니다. 49재나 납골 절차도 필요하면 함께 안내해드립니다.",
  },
];

export function Process() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="진행 절차"
          title="전화 한 통부터 정산까지, 이렇게 진행됩니다"
          description="각 단계에서 어떤 비용이 들고 어떤 비용이 들지 않는지 미리 말씀드리고 넘어갑니다."
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
