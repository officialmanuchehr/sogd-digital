import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white hover:opacity-90 shadow-[0_8px_24px_-8px_rgba(79,70,229,0.6)]",
  secondary:
    "border border-line text-paper hover:bg-white/5",
};

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
};

export function LinkButton({
  variant = "primary",
  className = "",
  href,
  ...props
}: AnchorButtonProps) {
  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
