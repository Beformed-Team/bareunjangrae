import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const required = ["name", "phone", "inquiryType", "message"];
    for (const key of required) {
      if (!body[key]) {
        return NextResponse.json(
          { ok: false, error: `필수 항목 누락: ${key}` },
          { status: 400 },
        );
      }
    }

    // TODO(EmailJS/Resend): 실제 메일 발송을 여기에 연결하세요.
    // 1) Resend: https://resend.com/docs/send-with-nextjs
    //    import { Resend } from "resend";
    //    const resend = new Resend(process.env.RESEND_API_KEY);
    //    await resend.emails.send({ from: ..., to: process.env.CONTACT_TO_EMAIL, ... });
    // 2) EmailJS: 프론트에서 emailjs-com 라이브러리로 직접 호출하는 방식도 가능.
    // 현재는 콘솔 로그만 남기는 placeholder 입니다.
    console.log("[contact] inquiry received", body);

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "잘못된 요청입니다." },
      { status: 400 },
    );
  }
}
