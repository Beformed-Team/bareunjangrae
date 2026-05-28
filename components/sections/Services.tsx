import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";

const SERVICES = [
  {
    title: "무빈소 가족장",
    desc: "조용히 가족만 모셔 떠나보내는 가장 단정한 방식.\n핵심만 남겨 비용을 최소화합니다.",
    img: "/images/service-mubinso.png",
    alt: "‘정성을 다하는 장례 서비스’ 표지가 걸린 입구 — 무빈소 가족장",
  },
  {
    title: "소규모 가족장",
    desc: "가까운 가족·친지만 모시는 1~2일장.\n빈소는 최소화하고 의례는 정성스럽게 진행합니다.",
    img: "/images/service-small.png",
    alt: "차분한 분위기의 소규모 빈소 — 소규모 가족장",
  },
  {
    title: "일반 빈소장 (3일장)",
    desc: "조문이 많은 일반 3일장도 패키지 없이, 필요한 항목만 골라 진행할 수 있습니다.",
    img: "/images/service-general.png",
    alt: "조문객을 맞이하는 정돈된 빈소 — 일반 빈소장",
  },
];

export function Services() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="서비스"
            title={
              <>
                가족의 상황에 맞춰,
                <br />
                형식은 줄이고, 마음은 더합니다.
              </>
            }
            description="규모만 고민하세요. 고객의 결정에 맞춰 실제 발생할 비용만 잡아 견적을 정리해드립니다."
          />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-b border-navy pb-1 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
          >
            맞춤 상담 받기
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <li
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy">{s.title}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-navy-500">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
