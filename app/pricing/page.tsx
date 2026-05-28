import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { PriceCompareTable } from "@/components/sections/PriceCompareTable";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "금액 비교",
  description:
    "바른장례의 정찰 인건비 25만 원과 원가 실비 정산 정책을, 일반 상조 패키지와 항목별로 비교해 드립니다. 패키지에 숨겨진 비용 없이 모든 금액을 공개합니다.",
};

const INCLUDED = [
  "장례지도사 1일 25만 원 (정찰)",
  "임종부터 발인까지 동행",
  "거래처 영수증 100% 공개",
  "꽃·상복·관·차량 원가 정산",
  "24시간 상담 (상담료 무료)",
  "사후 49재·납골 안내",
];

const EXCLUDED = [
  "패키지·세트 가격 강제",
  "중개 수수료·소개비",
  "감춰진 옵션 추가금",
  "기본 사양 외 차액 청구",
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="금액 비교"
        title="모든 금액을, 영수증 그대로 공개합니다"
        description="장례지도 인건비는 1일 25만 원 정찰. 그 외 모든 품목은 원가 실비로만 정산하며 중간 마진을 붙이지 않습니다."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="비교표"
            title="바른장례 vs 일반 상조 패키지"
            description="동일한 형식의 장례를 진행했을 때, 비용 구조가 어떻게 다른지 한눈에 보여드립니다."
          />

          <div className="mt-12">
            <PriceCompareTable />
          </div>

          <p className="mt-6 text-sm text-navy-500">
            * 비교 항목은 일반적인 시장 사례 기준이며, 실제 견적은 식장·일정·
            품목 선택에 따라 달라집니다. 정확한 견적은 상담을 통해 안내해
            드립니다.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="border border-gold bg-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              포함됩니다
            </p>
            <h3 className="mt-3 font-serif text-2xl text-navy">
              25만 원에 포함되는 것
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-navy-500">
              {INCLUDED.map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-navy-100 bg-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy-300">
              하지 않습니다
            </p>
            <h3 className="mt-3 font-serif text-2xl text-navy">
              바른장례에는 없는 것
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-navy-500">
              {EXCLUDED.map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-300"
                  />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container text-center">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">
            지금 견적이 궁금하신가요?
          </h2>
          <p className="mt-4 text-navy-500">
            상황을 알려주시면, 즉시 가능한 절차와 예상 금액을 정직하게
            안내해드립니다.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="gold" size="lg">
                상담 신청하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
