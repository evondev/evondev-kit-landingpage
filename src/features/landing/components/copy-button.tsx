"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, type ButtonVariant } from "@/components/button";
import { cn } from "@/utils/cn";

interface CopyButtonProps {
  text: string;
  copyLabel: string;
  copiedLabel: string;
  variant?: ButtonVariant;
  className?: string;
}

const copiedResetDelay = 2000;

/** Nút chỉ icon, chép `text` vào clipboard rồi đổi sang dấu tích trong 2 giây. */
export default function CopyButton({
  text,
  copyLabel,
  copiedLabel,
  variant = "ghost",
  className,
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const resetTimer = window.setTimeout(() => setIsCopied(false), copiedResetDelay);

    return () => window.clearTimeout(resetTimer);
  }, [isCopied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch {
      // Trình duyệt chặn clipboard (http, iframe): người dùng vẫn bôi đen chép tay được.
    }
  }

  const Icon = isCopied ? Check : Copy;

  return (
    <Button
      variant={variant}
      onClick={handleCopy}
      aria-label={isCopied ? copiedLabel : copyLabel}
      title={isCopied ? copiedLabel : copyLabel}
      className={cn("size-8 shrink-0 rounded-lg p-0", className)}
    >
      <Icon className="size-4" aria-hidden />
      <span className="sr-only" aria-live="polite">
        {isCopied ? copiedLabel : ""}
      </span>
    </Button>
  );
}
