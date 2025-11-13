import { PropsWithChildren } from "react";
import clsx from "classnames";

type ButtonProps = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  target?: string;
  rel?: string;
  className?: string;
}>;

export default function Button({ href, onClick, variant = "primary", target, rel, className, children }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-[8px] px-[24px] py-[10px] text-[15px] font-medium transition-opacity";
  const primary = "bg-[#111] text-white hover:opacity-85";
  const secondary = "border border-[#ccc] text-[#333] hover:opacity-90";
  const classes = clsx(base, variant === "primary" ? primary : secondary, className);
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
