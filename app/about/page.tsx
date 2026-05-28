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
    "대전·충남·세종·청주에서 활동 중인 장례지도사가 직접 운영합니다. 어떤 마음으로 시작했고 어떻게 일하는지 적어두었습니다.",
};

const VALUES = [
  {
    icon: Award,
    title: "현장 실무자가 직접",
    desc: "지금도 현장에서 일하는 장례지도사가 첫 통화부터 정산까지 직접 진행합니다.",
  },
  {
    icon: Compass,
    title: "지역 거래처를 잘 압니다",
    desc: "대전·충남·세종·청주 식장과 거래처를 오래 봐왔기 때문에, 동선과 견적을 무리 없이 잡아드립니다.",
  },
  {
    icon: Heart,
    title: "패키지 대신, 필요한 것만",
    desc: "패키지 가격으로 묶어 권하지 않습니다. 가족이 원하는 항목만 골라서 진행합니다.",
  },
];

const TIMELINE = [
  {
    year: "현재",
    body: "대전·충남·세종·청주 권역에서 장례지도사로 일하면서, 바른장례를 함께 운영하고 있습니다.",
  },
  {
    year: "{{경력 연도 입력 필요}}",
    body: "{{대표 약력 입력 필요 — 예: ○○대학교 장례지도학과 졸업, ○○상조 ○년 근무 등}}",
  },
  {
    year: "시작",
    body: "장례를 치르고 ‘이게 다 어디에 쓰인 돈인지’ 모르는 가족이 너무 많은 것을 보고, 모든 금액을 영수증 그대로 보여드리는 방식으로 일을 시작했습니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="대표 소개"
        title="한 번뿐인 장례, 후회 없이 보내드리고 싶습니다"
        description="장례는 다시 치를 수 없기 때문에, 가족이 나중에 ‘이건 왜 그랬지’ 싶은 게 없도록 진행하는 것을 가장 중요하게 생각합니다."
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
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-gold px-8 py-6 text-navy md:block">
              <p className="text-xl leading-snug font-semibold">
                무엇에 얼마가 쓰였는지
                <br />
                가족이 알 수 있어야 합니다.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="대표 인사말"
              title="‘이게 다 어디에 쓰인 돈이지?’ 라는 의문이 없도록"
            />
            <div className="mt-8 space-y-5 leading-relaxed text-navy-500">
              <p>
                대전·충남·세종·청주에서 장례지도사로 일하고 있습니다. 현장에서
                여러 가족을 모시다 보면, 장례를 다 치르고 나서야 ‘이게 다 어디에
                쓰인 돈이지’ 하는 의문이 남는 경우를 자주 봤습니다. 그 부분이
                마음에 걸려서 바른장례를 시작했습니다.
              </p>
              <p>
                제 인건비는 하루 25만 원, 그것만 받습니다. 꽃·상복·관·수의·차량
                같은 항목은 거래처에서 받은 영수증을 그대로 보여드리고, 그 금액
                그대로 정산합니다. 어디에 얼마가 쓰였는지 가족이 끝까지 알 수
                있어야 한다고 생각합니다.
              </p>
              <p>
                가장 슬픈 시간 옆에 서 있는 사람이라서, 말은 적게 하고 해야 할
                일을 정확히 하려고 합니다. 가족이 원하는 규모와 예산에 맞춰
                무리 없이 진행할 수 있도록 옆에서 돕겠습니다.
              </p>
              <p className="text-lg font-semibold text-navy">
                바른장례 대표 장례지도사 {"{{대표 성함 입력 필요}}"}
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
            title="어떤 마음으로 시작했나요"
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
