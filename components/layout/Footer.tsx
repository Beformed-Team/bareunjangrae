import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, BookOpen, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mb-5">
            <Image
              src="/logo-text.png"
              alt="바른장례"
              width={180}
              height={48}
              className="h-9 w-auto"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            {SITE.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={SITE.sns.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="인스타그램"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.sns.kakao}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 채널"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.sns.blog}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="블로그"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            바로가기
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <Link href="/about" className="hover:text-gold">
                대표 소개
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-gold">
                금액 비교
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gold">
                자주 묻는 질문
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                상담 신청
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            연락처
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-gold" aria-hidden="true" />
              <a
                href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
                className="hover:text-gold"
              >
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-gold" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </li>
            <li className="text-white/70">서비스 권역 · {SITE.region}</li>
            <li className="text-white/70">{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-start justify-between gap-2 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} 바른장례. All rights reserved.</p>
          <p>거품 없는 정직한 장례 · 원가 실비 정산 약속</p>
        </div>
      </div>
    </footer>
  );
}
