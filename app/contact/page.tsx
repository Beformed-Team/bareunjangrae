import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "상담 신청",
  description:
    "바른장례 상담 신청 페이지. 시간 가리지 마시고 편하게 연락 주세요. 상담료는 받지 않습니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="상담 신청"
        title="시간 가리지 마시고 편하게 연락 주세요"
        description="장례 상황은 기다릴 수 없는 일이라서, 야간·새벽 가리지 않고 응대합니다. 상담료는 받지 않습니다."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container grid gap-14 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border border-navy-100 p-7">
              <p className="text-xs font-semibold tracking-[0.25em] text-gold">
                24시간 직통
              </p>
              <a
                href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
                className="mt-3 block text-3xl font-bold text-navy hover:text-gold"
              >
                {SITE.phone}
              </a>
              <p className="mt-2 text-sm text-navy-500">
                바로 통화가 가장 빠릅니다. 상담료는 받지 않습니다.
              </p>
            </div>

            <ul className="space-y-5 text-sm text-navy-500">
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-navy">전화</p>
                  <p>{SITE.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-navy">이메일</p>
                  <p>{SITE.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-navy">서비스 권역</p>
                  <p>{SITE.region}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-navy">상담 시간</p>
                  <p>{SITE.hours}</p>
                </div>
              </li>
            </ul>

            <div className="rounded-2xl bg-cream p-7">
              <p className="text-lg font-semibold text-navy">
                지금 진행 중이신가요?
              </p>
              <p className="mt-2 text-sm text-navy-500">
                전화 한 통이면 바로 출발합니다. 위치와 상황만 알려 주세요.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-navy-100 bg-white p-7 md:p-10">
              <h2 className="text-2xl font-bold text-navy">
                상담 신청서 작성
              </h2>
              <p className="mt-2 text-sm text-navy-500">
                작성해 주신 내용은 상담 목적으로만 사용합니다. 빠른 안내를 위해
                연락처를 정확히 적어 주세요.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-navy">서비스 권역</h2>
          <p className="mt-3 max-w-2xl text-sm text-navy-500">
            대전 · 충남 · 세종 · 청주 권역으로 출장 지도가 가능합니다. 인접
            지역은 차량 운영 상황에 따라 다르니, 위치를 알려 주시면 가능
            여부를 바로 확인해드리겠습니다.
          </p>
          <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-navy-100 bg-white">
            <iframe
              title="서비스 권역 지도"
              src="https://www.google.com/maps?q=%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
