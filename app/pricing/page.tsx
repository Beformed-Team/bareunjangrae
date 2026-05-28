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
    "장례지도사 하루 25만 원과 거래처 영수증 그대로 정산하는 방식을, 일반 상조 패키지와 항목별로 비교해드립니다.",
};

const INCLUDED = [
  "장례지도사 인건비 하루 25만 원",
  "임종부터 발인까지 옆에서 동행",
  "거래처 영수증 그대로 공유",
  "꽃·상복·관·차량은 원가 그대로 정산",
  "24시간 상담 가능, 상담료 없음",
  "장례 이후 49재·납골 안내",
];

const EXCLUDED = [
  "패키지·세트 가격으로 묶어 권하는 것",
  "중개 수수료나 소개비",
  "기본 사양과 다르다고 청구하는 차액",
  "야간 할증, 시간 단위 추가 청구",
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="금액 비교"
        title="모든 비용을 영수증 그대로 알려드립니다"
        description="장례지도 인건비는 하루 25만 원. 그 외 항목은 거래처에서 받은 영수증 금액 그대로 받고, 그 위에 따로 마진을 붙이지 않습니다."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="비교표"
            title="바른장례와 일반 상조 패키지, 어떻게 다른가요?"
            description="같은 규모의 장례를 진행했을 때, 비용이 어떤 구조로 잡히는지 한눈에 비교해드립니다."
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
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">
              포함됩니다
            </p>
            <h3 className="mt-3 text-2xl font-bold text-navy">
              25만 원 안에 포함되는 것
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
            <p className="text-xs font-semibold tracking-[0.25em] text-navy-300">
              하지 않습니다
            </p>
            <h3 className="mt-3 text-2xl font-bold text-navy">
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
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            지금 견적이 궁금하신가요?
          </h2>
          <p className="mt-4 text-navy-500">
            상황을 알려주시면 어떻게 진행할 수 있는지, 금액은 어느 정도일지
            먼저 알려드립니다.
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
