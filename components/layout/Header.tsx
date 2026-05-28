"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/about", label: "대표 소개" },
  { href: "/pricing", label: "금액 비교" },
  { href: "/faq", label: "자주 묻는 질문" },
  { href: "/contact", label: "상담 신청" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const handleKakaoConsult = () => {
    alert("카카오톡 연결 준비중 입니다.");
  };

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-navy-100 bg-white/95 backdrop-blur"
          : "border-transparent bg-white",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="바른장례 홈으로"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={44}
            height={48}
            priority
            aria-hidden="true"
            className="h-11 w-auto"
          />
          <Image
            src="/logo-text.png"
            alt="바른장례"
            width={160}
            height={40}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav aria-label="주 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-navy transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={handleKakaoConsult}
            className="inline-flex items-center gap-2 rounded-lg border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            24시간 카톡 상담
          </button>
        </div>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center text-navy lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <nav aria-label="모바일 메뉴" className="container py-4">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-navy-50">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-base font-medium text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                handleKakaoConsult();
              }}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gold py-3 text-sm font-semibold text-gold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              24시간 카톡 상담
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
