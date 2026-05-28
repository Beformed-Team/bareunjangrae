"use client";

import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const handleKakaoConsult = () => {
    alert("카카오톡 연결 준비중 입니다.");
  };

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-14 text-white md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
          />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                24시간 카톡 상담
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                지금 이 순간에도, <br />
                바른장례가 옆에 있습니다.
              </h2>
              <p className="mt-5 max-w-md text-white/75">
                상담료는 무료입니다. 가능한 절차와 예상 비용을, 의뢰 여부와
                상관없이 정직하게 알려드립니다.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <button
                type="button"
                onClick={handleKakaoConsult}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-gold px-8 font-semibold text-navy transition-colors hover:bg-gold-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                카톡으로 바로 상담하기
              </button>
              <Link href="/contact">
                <Button variant="ghostWhite" size="lg">
                  상담 신청서 작성
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
