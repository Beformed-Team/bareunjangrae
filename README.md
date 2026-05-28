# 바른장례 (Barun Funeral) — 홈페이지

대전·충남·세종·청주 권역의 장례지도 서비스 ‘바른장례’ 공식 홈페이지입니다.
거품 없는 정직한 장례, 원가 실비 정산 정책을 알리기 위해 제작되었습니다.

스택: **Next.js 14 (App Router) · TypeScript · Tailwind CSS · framer-motion · react-hook-form · zod · lucide-react**

---

## 1분 안에 보는 법

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속합니다.

빌드 / 프로덕션 실행:

```bash
npm run build
npm run start
```

---

## 폴더 구조

```
output/
├── app/
│   ├── layout.tsx              글로벌 레이아웃·메타데이터·JSON-LD
│   ├── page.tsx                홈(랜딩)
│   ├── about/page.tsx          대표 소개
│   ├── pricing/page.tsx        금액 비교
│   ├── faq/page.tsx            자주 묻는 질문
│   ├── contact/page.tsx        상담 신청
│   ├── not-found.tsx           404
│   ├── sitemap.ts              자동 사이트맵
│   ├── robots.ts               robots
│   └── api/contact/route.ts    문의 폼 수신(placeholder)
├── components/
│   ├── ui/                     Button · Input · Accordion
│   ├── layout/                 Header · Footer · SectionHeading · PageHeader
│   └── sections/               Hero · Values · Services · PricePreview · PriceCompareTable · Process · Testimonials · CTA · ContactForm
├── content/
│   ├── faq.json                FAQ 데이터
│   └── pricing.json            금액 비교 데이터
├── lib/utils.ts                cn() · SITE 상수(연락처·SNS 등)
├── public/
│   ├── logo.svg                헤더 로고(워드마크 + 다이아몬드 심볼)
│   ├── logo-mark.svg           심볼 단독
│   └── og-image.svg            OG 이미지
├── styles/globals.css          Tailwind + 디자인 토큰
├── tailwind.config.ts          색·폰트·간격
├── next.config.mjs             외부 이미지 도메인 허용
├── tsconfig.json
├── package.json
├── .env.example                환경변수 샘플
└── .gitignore
```

---

## GitHub 푸시 → Vercel 임포트 3단계

1. **GitHub 저장소 생성 및 푸시**
   ```bash
   git init
   git add .
   git commit -m "chore: 바른장례 홈페이지 초기 커밋"
   git branch -M main
   git remote add origin https://github.com/<your-account>/barun-janglae.git
   git push -u origin main
   ```
2. **Vercel 임포트**
   [vercel.com/new](https://vercel.com/new) 접속 → GitHub 저장소 선택 → Framework는 자동으로 “Next.js” 인식 → Import 클릭.
3. **환경변수 설정 후 Deploy**
   Vercel Project Settings → Environment Variables에 `.env.example`의 키를 동일하게 추가 → Deploy. 배포 후 발급된 `https://*.vercel.app` 도메인을 `NEXT_PUBLIC_SITE_URL`에 다시 반영하면 메타데이터·sitemap이 정확하게 채워집니다.

---

## 환경변수 (.env.example 기준)

| 키 | 필수 | 설명 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | ✔ | 사이트 절대 URL. metadataBase·sitemap·OG 링크 생성에 사용. |
| `CONTACT_TO_EMAIL` | – | 문의 수신용 이메일. `app/api/contact/route.ts`에서 사용 예정. |
| `RESEND_API_KEY` | – | Resend 연동 시 사용 (선택). |
| `NEXT_PUBLIC_EMAILJS_*` | – | EmailJS 연동 시 사용 (선택). |

> 폼 제출은 현재 `/api/contact`에서 placeholder로 콘솔에 로깅합니다. 실제 메일 발송은 **Resend** 또는 **EmailJS** 연동을 권장합니다 — 라우트 파일 상단 주석 참고.

---

## 디자인 토큰 · 교체 위치

| 항목 | 파일 | 위치 |
| --- | --- | --- |
| 메인 색상 (Navy / Gold) | `tailwind.config.ts` | `theme.extend.colors.navy`, `colors.gold` |
| 본문/제목 폰트 | `app/layout.tsx` | `Noto_Sans_KR`, `Noto_Serif_KR` (next/font/google) |
| 글로벌 CSS 변수 | `styles/globals.css` | `:root` 블록 |
| 사이트 메타(이름·전화·이메일·주소·SNS) | `lib/utils.ts` | `SITE` 상수 |
| 헤더 메뉴 항목 | `components/layout/Header.tsx` | `NAV` 배열 |
| 푸터 SNS · 연락처 | `components/layout/Footer.tsx` | 본문 |
| FAQ 항목 | `content/faq.json` | – |
| 금액 비교표 | `content/pricing.json` | – |
| 로고 (워드마크) | `public/logo.svg` | SVG 직접 편집 또는 새 파일 교체 |
| 로고 (심볼) | `public/logo-mark.svg` | – |
| OG 이미지 | `public/og-image.svg` | 권장 1200×630 |
| 외부 이미지 도메인 허용 | `next.config.mjs` | `images.remotePatterns` |

### 로고 교체

- 클라이언트 신청서에 첨부된 실제 로고 PNG(`바른장례 로고.png`)가 있다면, `public/logo.svg`를 동일한 이름의 PNG 또는 SVG로 교체하세요.
- 헤더의 권장 표시 크기는 가로 **176px × 세로 44px** (Header.tsx의 `<Image width=... />` 값과 동기화 필요).
- PNG로 교체 시 `app/layout.tsx`의 OG 이미지도 `/public/og-image.png` 등으로 함께 갱신 권장.

---

## 자리표시자 체크리스트

> `{{...}}` 형태로 표시된 항목은 클라이언트가 직접 채워야 하는 정보입니다.

- ⬜ 대표 전화번호 — `lib/utils.ts` `SITE.phone`
- ⬜ 대표 이메일 — `lib/utils.ts` `SITE.email`
- ⬜ 사무실 주소 — `lib/utils.ts` `SITE.address`
- ⬜ 인스타그램 / 카카오톡 채널 / 블로그 URL — `lib/utils.ts` `SITE.sns`
- ⬜ 대표 성함·약력·경력 연도 — `app/about/page.tsx` (대표 인사말 끝, TIMELINE 두 번째 항목)
- ⬜ 유족 후기 3건 (성함·지역·내용) — `components/sections/Testimonials.tsx`
- ⬜ 실제 로고 PNG/SVG — `public/logo.svg`
- ⬜ 지도 좌표 (정확한 사무실 위치) — `app/contact/page.tsx`의 iframe `src` (현재는 ‘대전광역시’ 기본값)
- ✅ FAQ 6개 — `content/faq.json` (기본 콘텐츠 제공, 필요 시 수정)
- ✅ 금액 비교표 — `content/pricing.json` (기본 콘텐츠 제공)

---

## 디자인 결정

- **선택한 톤: 고급·프리미엄(Navy + Gold + White).**
  신청서에서 “브랜드 톤 = 고급·프리미엄”과 “로고의 네이비·골드·화이트를 그대로 반영” 두 가지 요청이 모두 있었기 때문에, 가이드 기본 팔레트(Black + Gold) 대신 클라이언트의 로고 색을 그대로 따랐습니다. 결과적으로 ‘무게감 · 신뢰감 · 정중함’이 함께 표현되어 장례 서비스 톤과 잘 맞습니다.
- **헤딩 폰트: Noto Serif KR.** 프리미엄·정중함을 위한 세리프 헤드라인, 본문은 Noto Sans KR.
- **레이아웃 원칙: 와이드 여백 + 직각 모서리.** 둥근 모서리 대신 직각을 사용해 절제된 인상을 유지하고, 골드 라인 디바이더로 포인트를 줍니다.

## 구성 결정 사항

- **신청서 선택 페이지(필수)**: 대표 소개 · 상담 신청 · FAQ · 금액 비교 모두 구현.
- **자율 추가 페이지 / 섹션**:
  - 홈(`/`)에 **서비스 형식(무빈소·소규모·일반)**, **진행 절차 4단계**, **유족 후기** 섹션을 추가했습니다. 참고 사이트인 `무빈소가족장.com`의 핵심 강점인 “형식별 안내 · 절차 안내”를 반영해 신뢰감을 높이기 위함입니다.
  - 별도 ‘오시는 길’ 페이지 대신 `/contact` 하단에 서비스 권역 안내 + Google Maps 임베드를 통합했습니다. 출장 위주 서비스이므로 사무실 단일 좌표보다 ‘권역’ 전달이 적절합니다.
  - 공지사항/언론보도는 현재 단계에서는 필요성이 낮다고 판단해 생략했습니다 (확장 시 손쉽게 추가 가능 — 아래 ‘확장 시 고려’ 참고).

---

## 이미지 출처

| 위치 | URL | 라이선스 |
| --- | --- | --- |
| 홈 Hero | https://images.unsplash.com/photo-1490750967868-88aa4486c946 | Unsplash License (상업적 사용 가능, 출처 표기 의무 없음) |
| 홈 Services — 무빈소 가족장 | https://images.unsplash.com/photo-1518709268805-4e9042af9f23 | Unsplash License |
| 홈 Services — 소규모 가족장 | https://images.unsplash.com/photo-1503342217505-b0a15ec3261c | Unsplash License |
| 홈 Services — 일반 빈소장 | https://images.unsplash.com/photo-1602522953006-22f5e8b15f47 | Unsplash License |
| About 대표 인사말 | https://images.unsplash.com/photo-1521791136064-7986c2920216 | Unsplash License |

> 이미지를 교체하려면 `next.config.mjs`의 `images.remotePatterns`에 새 도메인을 등록한 뒤 사용해 주세요. 로컬 이미지는 `public/images/`에 두고 `/images/파일명`으로 참조합니다.

---

## 품질 자체 점검 (Self-Check)

- ✅ 반응형: 360 / 768 / 1280 검수 — 헤더, Hero, 비교표, 폼 모두 모바일에서 가로 스크롤 없음.
- ✅ 접근성: 이미지 alt 한국어, 폼 label·aria-invalid·aria-describedby 연결, 키보드 포커스 링(골드), Skip Link 제공, AA 색 대비.
- ✅ SEO: 각 페이지 metadata · sitemap · robots · LocalBusiness · FAQPage JSON-LD.
- ✅ 보안: `.env.local` 사용 + `.env.example` 제공, 외부 이미지 도메인은 `remotePatterns`에 한정.
- ✅ 코드 품질: TypeScript strict, ESLint(next/core-web-vitals), Prettier(+ tailwindcss plugin).

---

## 확장 시 고려

- **공지사항·언론보도 페이지 추가**: `content/notices.json`, `content/press.json` 파일을 만들고 `app/notice/page.tsx`, `app/press/page.tsx` 라우트만 추가하면 됩니다(기존 카드 그리드 패턴 재사용 가능). 현재는 운영 부담을 줄이기 위해 생략했습니다.
- **실제 메일 발송 연동**: `app/api/contact/route.ts`에 Resend(`RESEND_API_KEY` 사용) 또는 EmailJS를 연결하세요. 라우트 상단 주석에 코드 스니펫이 있습니다.
- **DB / CMS 도입**: 후기·공지를 비개발자가 관리해야 한다면 **Supabase**(Postgres + 무료 인증) 또는 **Sanity / Contentful** CMS 도입을 권장합니다. 현재는 정적 JSON으로 운영되므로 마이그레이션 시 컴포넌트는 그대로 두고 데이터 소스만 fetch로 바꾸면 됩니다.
- **다국어(i18n)**: 신청서에 명시되지 않아 한국어 단일 언어로 구현했습니다. 필요 시 `app/[locale]/` 구조로 전환 + `next-intl` 도입 권장.
- **예약 캘린더 / 카카오 채팅 위젯**: 사전 상담 자동화가 필요하면 Calendly 임베드, 카카오 채널 위젯을 `app/contact/page.tsx`에 삽입 가능합니다.
- **쇼핑몰·결제**: 본 프로젝트 범위를 벗어납니다. 별도 도메인에 Cafe24 / Shopify, 또는 Next.js + Stripe로 분리 운영을 권장합니다.

---

## 알려진 한계

- 후기·연혁·연락처는 실제 정보가 들어와야 의미를 가집니다. ‘자리표시자 체크리스트’를 먼저 채워 주세요.
- Google Maps iframe은 ‘대전광역시’ 검색 기본값입니다. 사무실 주소가 정해지면 좌표 기반으로 교체해 주세요.
- OG 이미지는 SVG로 제공되며, 카카오톡 일부 환경에서는 PNG가 필요할 수 있습니다 — 필요한 경우 `/public/og-image.png`(1200×630)로 변환해 두면 안전합니다.
