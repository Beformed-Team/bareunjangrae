import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion } from "@/components/ui/accordion";
import { CTA } from "@/components/sections/CTA";
import faq from "@/content/faq.json";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description:
    "바른장례에 자주 들어오는 질문과 답변을 정리했습니다. 인건비·원가 실비·지역·상담 시간 등 궁금한 점을 빠르게 확인하세요.",
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
        title="궁금하신 부분을 먼저 풀어드립니다"
        description="가장 자주 받는 질문들을 정리했습니다. 여기에 없는 질문은 언제든 상담으로 문의해 주세요."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container max-w-3xl">
          <Accordion items={faq} />
          <p className="mt-12 text-center text-sm text-navy-500">
            그 외 궁금하신 점은{" "}
            <a
              href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
              className="font-semibold text-gold underline-offset-4 hover:underline"
            >
              {SITE.phone}
            </a>{" "}
            로 24시간 언제든 문의해 주세요.
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
