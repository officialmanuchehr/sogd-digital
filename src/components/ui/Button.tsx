import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "inverted" | "outlineInvert";

const baseClasses =
  "inline-flex items-center justify-center px-6 py-3 label transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";

const variantClasses: Record<Variant, string> = {
  primary: "border border-ink bg-ink text-paper hover:opacity-85",
  secondary: "border border-line text-ink hover:bg-ink hover:text-paper",
  inverted: "border border-paper bg-paper text-ink hover:opacity-85",
  outlineInvert: "border border-line-invert text-paper hover:bg-paper/10",
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
