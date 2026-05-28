"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1000px 400px at 80% -10%, rgba(201,162,39,0.3), transparent 60%), radial-gradient(700px 300px at 0% 100%, rgba(201,162,39,0.15), transparent 60%)",
        }}
      />

      <div className="container relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <p className="mb-6 inline-block border-l-2 border-gold pl-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            대전 · 충남 · 세종 · 청주
          </p>
          <h1 className="text-balance text-4xl leading-[1.2] md:text-5xl lg:text-[3.4rem]">
            장례지도사 하루 <span className="text-gold">25만 원</span>,
            <br className="hidden md:inline" /> 나머지는 영수증 그대로.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            꽃, 상복, 관, 차량까지 거래처에서 받은 영수증 금액 그대로 정산합니다.
            <br />
            패키지 가격이나 중개 수수료는 따로 받지 않습니다.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button variant="gold" size="lg" className="w-full sm:w-auto">
                상담 신청하기
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                variant="ghostWhite"
                size="lg"
                className="w-full sm:w-auto"
              >
                금액 비교 보기
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <MessageCircle
                className="h-4 w-4 text-gold"
                aria-hidden="true"
              />
              24시간 카톡 상담 가능 · 상담료 무료
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              현장에서 일하는 장례지도사가 직접
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.png"
              alt="장례지도사가 단정한 정장 차림으로 깊이 인사하는 모습 — 유족을 정중히 모십니다"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-gold/60 bg-navy/60 p-5 backdrop-blur">
              <p className="text-xs font-semibold tracking-[0.25em] text-gold">
                장례지도사 인건비
              </p>
              <p className="mt-2 text-3xl font-bold text-white">
                하루 250,000원
              </p>
              <p className="mt-1 text-xs text-white/70">
                꽃·상복·관·차량은 거래처 영수증 금액 그대로
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
