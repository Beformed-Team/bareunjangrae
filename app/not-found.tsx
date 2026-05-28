import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-cream py-32">
      <div className="container max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl text-navy">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-4 text-navy-500">
          주소가 변경되었거나 삭제된 페이지일 수 있습니다.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/">
            <Button variant="primary">홈으로 돌아가기</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">상담 신청</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
