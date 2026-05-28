import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "바른장례",
  tagline: "거품 없는 정직한 장례, 처음 그대로의 마음으로",
  description:
    "대전·충남·세종·청주 지역의 장례지도사가 직접 운영합니다. 장례지도 1일 25만 원 정찰제와 모든 용품의 원가 실비 정산으로, 거품을 덜어낸 투명한 장례 서비스를 약속드립니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://barun-janglae.vercel.app",
  phone: "{{대표 전화번호 입력 필요}}",
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
