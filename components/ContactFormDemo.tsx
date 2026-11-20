"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { apiClient } from "@/lib/axios";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/validations";
import type { ApiError, ApiResponse } from "@/types";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Textarea } from "@/components/ui";

export function ContactFormDemo() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: NewsletterFormValues) => {
    setStatusMessage(null);
    setSubmitError(null);

    try {
      const response = await apiClient.post<ApiResponse<{ receivedAt: string }>>(
        "/health",
        values
      );
      setStatusMessage(
        response.data.message ?? "Validated and submitted successfully via Axios."
      );
      reset();
    } catch (err) {
      const apiError = err as ApiError;
      setSubmitError(apiError.message ?? "Submission failed. Please try again.");
    }
  };

  return (
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <CardTitle>Interactive Form &amp; API Demo</CardTitle>
        <CardDescription>
          Powered by React Hook Form, Zod schema validation, and the pre-configured Axios client.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
          <Input
            label="Full Name"
            placeholder="Jane Doe"
            error={errors.name?.message}
            {...register("name")}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="jane@example.com"
            error={errors.email?.message}
            {...register("email")}
          />

          <Textarea
            label="Message"
            placeholder="Tell us about the feature or backend API you want to build..."
            error={errors.message?.message}
            {...register("message")}
          />

          {statusMessage && (
            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2.5 text-sm text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{statusMessage}</span>
            </div>
          )}

          {submitError && (
            <div
              role="alert"
              className="rounded-lg border border-destructive/30 bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive"
            >
              {submitError}
            </div>
          )}

          <Button type="submit" isLoading={isSubmitting} className="w-full sm:w-auto sm:self-end">
            <Send className="h-4 w-4" aria-hidden="true" />
            Test Submission
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
