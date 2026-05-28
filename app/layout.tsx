import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | 장례지도사 하루 25만 원, 나머지는 영수증 그대로`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "바른장례",
    "대전 장례지도사",
    "충남 장례",
    "세종 장례",
    "청주 장례",
    "무빈소 가족장",
    "장례 비용 비교",
    "원가 실비 장례",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | 장례지도사 하루 25만 원, 나머지는 영수증 그대로`,
    description: SITE.description,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | 장례지도사 하루 25만 원, 나머지는 영수증 그대로`,
    description: SITE.description,
    images: ["/og-image.svg"],
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    image: `${SITE.url}/og-image.svg`,
    areaServed: ["대전", "충청남도", "세종특별자치시", "청주시"],
    address: {
      "@type": "PostalAddress",
      addressRegion: "KR",
      addressLocality: "대전",
    },
    priceRange: "₩₩",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-navy antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          본문 바로가기
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
