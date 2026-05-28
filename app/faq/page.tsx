import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion } from "@/components/ui/accordion";
import { CTA } from "@/components/sections/CTA";
import faq from "@/content/faq.json";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description:
    "바른장례 상담 전에 자주 들어오는 질문을 모았습니다. 인건비, 영수증 공개 방식, 출장 지역, 상담 시간 등을 확인하세요.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <PageHeader
        eyebrow="자주 묻는 질문"
        title="자주 들어오는 질문을 모았습니다"
        description="상담 전에 미리 확인하시면 좋은 내용을 정리했습니다. 여기에 없는 내용은 카톡으로 편하게 물어봐 주세요."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container max-w-3xl">
          <Accordion items={faq} />
          <p className="mt-12 text-center text-sm text-navy-500">
            그 외 궁금한 점은{" "}
            <a
              href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
              className="font-semibold text-gold underline-offset-4 hover:underline"
            >
              {SITE.phone}
            </a>{" "}
            또는 카톡 상담으로 언제든 문의해 주세요.
          </p>
        </div>
      </section>

      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
