import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "바른장례",
  tagline: "장례지도사 하루 25만 원, 나머지는 영수증 그대로",
  description:
    "대전·충남·세종·청주에서 활동 중인 장례지도사가 직접 운영합니다. 인건비는 하루 25만 원, 꽃·상복·관·차량은 거래처에서 받은 영수증 금액 그대로 정산합니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://barun-janglae.vercel.app",
  phone: "1511-8888",
  email: "{{대표 이메일 입력 필요}}",
  address: "{{사무실 주소 입력 필요}} (대전·충남·세종·청주 출장 가능)",
  hours: "24시간 상담 가능",
  region: "대전 · 충남 · 세종 · 청주",
  sns: {
    blog: "{{블로그 URL 입력 필요}}",
    instagram: "{{인스타그램 URL 입력 필요}}",
    kakao: "{{카카오톡 채널 URL 입력 필요}}",
  },
};
