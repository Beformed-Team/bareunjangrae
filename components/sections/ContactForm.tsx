"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select, Label } from "@/components/ui/input";

const schema = z.object({
  name: z.string().min(2, "성함을 입력해 주세요."),
  phone: z
    .string()
    .min(9, "연락처를 정확히 입력해 주세요.")
    .regex(/^[0-9\-+\s]+$/, "숫자와 - 만 입력 가능합니다."),
  email: z
    .string()
    .email("올바른 이메일 형식이 아닙니다.")
    .optional()
    .or(z.literal("")),
  inquiryType: z.string().min(1, "문의 유형을 선택해 주세요."),
  region: z.string().optional(),
  message: z.string().min(5, "문의 내용을 5자 이상 입력해 주세요."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "개인정보 수집·이용에 동의해 주세요." }),
  }),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      inquiryType: "",
      region: "",
      message: "",
      consent: undefined as unknown as true,
    },
  });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("submit-failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
      aria-describedby="form-status"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="name">
            성함 <span className="text-gold">*</span>
          </Label>
          <Input
            id="name"
            placeholder="홍길동"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-err" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-err" className="mt-2 text-xs text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">
            연락처 <span className="text-gold">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="010-0000-0000"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-err" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-err" className="mt-2 text-xs text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="email">이메일 (선택)</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-err" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-err" className="mt-2 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="region">지역</Label>
          <Select id="region" {...register("region")}>
            <option value="">선택해 주세요</option>
            <option value="daejeon">대전</option>
            <option value="chungnam">충남</option>
            <option value="sejong">세종</option>
            <option value="cheongju">청주</option>
            <option value="other">그 외</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="inquiryType">
          문의 유형 <span className="text-gold">*</span>
        </Label>
        <Select
          id="inquiryType"
          aria-invalid={!!errors.inquiryType}
          aria-describedby={
            errors.inquiryType ? "inquiryType-err" : undefined
          }
          {...register("inquiryType")}
        >
          <option value="">선택해 주세요</option>
          <option value="immediate">지금 즉시 장례 진행 상담</option>
          <option value="pre">사전 상담 (미리 알아보기)</option>
          <option value="price">금액 비교 / 견적 문의</option>
          <option value="etc">기타 문의</option>
        </Select>
        {errors.inquiryType && (
          <p id="inquiryType-err" className="mt-2 text-xs text-red-600">
            {errors.inquiryType.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">
          문의 내용 <span className="text-gold">*</span>
        </Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="고인의 상황, 희망하시는 형식, 예산 등 알려 주시면 가장 정직한 안내를 도와드리겠습니다."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-err" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-err" className="mt-2 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="border-t border-navy-100 pt-6">
        <label className="flex items-start gap-3 text-sm text-navy-500">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-gold"
            {...register("consent")}
          />
          <span>
            <span className="font-medium text-navy">
              개인정보 수집·이용에 동의합니다.{" "}
            </span>
            <span className="text-navy-500">
              (수집 항목: 성함·연락처·이메일·문의 내용 / 이용 목적: 장례 상담
              및 안내 / 보유 기간: 상담 종료 후 1년)
            </span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-2 text-xs text-red-600">{errors.consent.message}</p>
        )}
      </div>

      <div
        id="form-status"
        role="status"
        aria-live="polite"
        className="min-h-[1.5rem] text-sm"
      >
        {status === "success" && (
          <p className="inline-flex items-center gap-2 text-green-700">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            상담 신청이 접수되었습니다. 24시간 내 회신 드리겠습니다.
          </p>
        )}
        {status === "error" && (
          <p className="inline-flex items-center gap-2 text-red-600">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? "전송 중…" : "상담 신청 보내기"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </Button>
    </form>
  );
}
