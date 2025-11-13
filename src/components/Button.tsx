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
  const classes = clsx("btn", variant === "primary" ? "btn-primary" : "btn-secondary", className);
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
