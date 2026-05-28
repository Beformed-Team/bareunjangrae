import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";
import { Award, Compass, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "대표 소개",
  description:
    "대전·충남·세종·청주 권역에서 활동 중인 현직 장례지도사가 직접 운영합니다. 거품 없는 정직한 장례를 만들어 가는 사람의 이야기를 전합니다.",
};

const VALUES = [
  {
    icon: Award,
    title: "현직 장례지도사",
    desc: "장례지도사 자격을 보유한 현장 실무자가 직접 응대하고, 장례를 처음부터 끝까지 함께 진행합니다.",
  },
  {
    icon: Compass,
    title: "지역 밀착 운영",
    desc: "대전·충남·세종·청주의 식장·거래처를 잘 알고 있어, 가장 합리적인 동선과 견적을 제안합니다.",
  },
  {
    icon: Heart,
    title: "유족 중심 설계",
    desc: "패키지를 권하지 않습니다. 가족의 마음과 예산에 맞춰 필요한 항목만 골라 진행합니다.",
  },
];

const TIMELINE = [
  {
    year: "현재",
    body: "대전·충남·세종·청주 권역 현직 장례지도사로 활동하며 ‘바른장례’ 서비스를 운영하고 있습니다.",
  },
  {
    year: "{{경력 연도 입력 필요}}",
    body: "{{대표 약력 입력 필요 — 예: ○○대학교 장례지도학과 졸업, ○○상조 ○년 근무 등}}",
  },
  {
    year: "시작",
    body: "‘장례에서 가장 무거운 짐은 슬픔이어야 한다’는 생각으로, 거품 없는 장례 서비스를 시작했습니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="대표 소개"
        title="장례를 ‘서비스’가 아닌 ‘약속’으로 봅니다"
        description="장례는 한 번뿐입니다. 그 한 번을 위해, 가격이 아닌 진심으로 평가받겠습니다."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container grid gap-14 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                alt="단정한 정장 차림으로 손을 모은 장례지도사 — 진중함을 상징"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden bg-gold px-8 py-6 text-navy md:block">
              <p className="font-serif text-2xl leading-tight">
                정직이
                <br />
                가장 큰 위로입니다
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="대표 인사말"
              title="가격이 아닌, 진심으로 함께합니다"
            />
            <div className="mt-8 space-y-5 leading-relaxed text-navy-500">
              <p>
                안녕하세요. 대전·충남·세종·청주 권역에서 활동 중인 현직
                장례지도사입니다. ‘바른장례’는 패키지나 중개 수수료에 가려진
                불투명한 비용을, 다시 가족의 손에 돌려드리기 위해 시작한
                서비스입니다.
              </p>
              <p>
                장례지도사 1일 인건비는 25만 원 정찰제로 받습니다. 그 외 생화·
                상복·관·수의·차량 등 모든 품목은 거래처에서 받은 영수증을 그대로
                보여드리고, 원가 실비로만 정산합니다. 어떤 가족이라도 무엇에
                얼마가 쓰이는지를 정확히 알고 떠나보낼 수 있어야 한다고
                믿습니다.
              </p>
              <p>
                슬픔이 가장 큰 시간을 함께하기에, 말은 줄이고 행동은 정확하게
                하겠습니다. 가족의 마음과 예산에 가장 잘 맞는 형식을 찾도록
                옆에서 돕겠습니다.
              </p>
              <p className="font-serif text-lg text-navy">
                — 바른장례 대표 장례지도사 {"{{대표 성함 입력 필요}}"}
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="border border-navy-100 p-5">
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <p className="mt-3 font-serif text-base text-navy">
                    {title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-navy-500">
                    {desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="걸어온 길"
            title="장례지도사로서의 약속"
          />

          <ol className="mt-14 border-l border-navy-100 pl-6 md:pl-10">
            {TIMELINE.map((t, i) => (
              <li key={i} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[33px] top-1 inline-flex h-4 w-4 items-center justify-center md:-left-[45px]"
                >
                  <span className="block h-2.5 w-2.5 rounded-full bg-gold" />
                </span>
                <p className="font-serif text-xl text-gold">{t.year}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-navy-500">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <Link href="/contact">
              <Button variant="primary" size="lg">
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
