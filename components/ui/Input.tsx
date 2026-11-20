import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  id,
  label,
  error,
  helperText,
  className,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        className={cn(
          "h-10 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground",
          "placeholder:text-muted-foreground transition-colors",
          "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus:border-destructive focus:ring-destructive/20",
          className
        )}
        {...props}
      />
      {error ? (
        <p className="text-xs font-medium text-destructive" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Textarea({
  id,
  label,
  error,
  helperText,
  className,
  rows = 4,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground",
          "placeholder:text-muted-foreground transition-colors resize-y",
          "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus:border-destructive focus:ring-destructive/20",
          className
        )}
        {...props}
      />
      {error ? (
        <p className="text-xs font-medium text-destructive" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
}
