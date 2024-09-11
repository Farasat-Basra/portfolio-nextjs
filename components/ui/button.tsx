import { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-[colors_transform] focus-visible:outline-none text-base font-medium active:scale-95",
  {
    variants: {
      variant: {
        invert:
          "bg-secondary-800 hover:bg-secondary-700 focus:bg-secondary-600 text-secondary-50 border border-secondary-300 dark:bg-secondary-100 dark:hover:bg-secondary-300 dark:focus:bg-secondary-400 dark:text-secondary-900 dark:border-secondary-800",
        primary:
          "bg-primary hover:bg-primary-400 active:bg-primary-700 focus:bg-primary-600 text-secondary-700 selection:bg-primary-100",
        "outline-primary":
          "bg-[transparent] text-primary-700 border border-primary-700 hover:bg-primary/10 active:bg-primary/30 focus:bg-primary/20 dark:border-primary",
      },
      size: {
        sm: "h-8 px-5 rounded",
        md: "h-10 px-5 rounded",
        lg: "h-12 px-6 rounded-lg",
        icon: "px-2 h-10",
      },
    },
    defaultVariants: {
      variant: "invert",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  rounded?: boolean;
}

export const Button = ({
  type = "submit",
  className,
  variant,
  rounded,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn([
        buttonVariants({ variant, size, className }),
        rounded ? "!rounded-full" : "",
      ])}
      {...props}
    />
  );
};
