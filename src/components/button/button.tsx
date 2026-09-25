import type { ComponentProps } from "react";
import type { ButtonVariant } from "@/components/button/button-variant";
import { getButtonClasses } from "@/components/button/get-button-classes";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "outline",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return <button type={type} className={getButtonClasses(variant, className)} {...props} />;
}
