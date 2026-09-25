import Link from "next/link";
import type { ComponentProps } from "react";
import type { ButtonVariant } from "@/components/button/button-variant";
import { getButtonClasses } from "@/components/button/get-button-classes";

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant;
}

/** Link trông như nút: CTA dẫn tới một section hoặc một trang, không phải hành động. */
export default function ButtonLink({ variant = "outline", className, ...props }: ButtonLinkProps) {
  return <Link className={getButtonClasses(variant, className)} {...props} />;
}
