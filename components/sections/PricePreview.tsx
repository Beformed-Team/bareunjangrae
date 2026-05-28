import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { PriceCompareTable } from "@/components/sections/PriceCompareTable";
import { Button } from "@/components/ui/button";

export function PricePreview() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="금액 비교"
          title="일반 상조 패키지와 어떻게 다른가요?"
          description="패키지 가격에 묶이는 항목 없이, 발생한 비용만 영수증 그대로 받습니다. 항목별로 비교해보세요."
        />

        <div className="mt-12">
          <PriceCompareTable />
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-navy-500">
            * 위 비교는 일반적인 시장가 기준이고, 실제 견적은 가족이 선택하시는
            항목에 따라 달라질 수 있습니다.
          </p>
          <Link href="/pricing">
            <Button variant="outline">
              자세한 금액 정책 보기
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
