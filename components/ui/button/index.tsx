import clsx from "clsx";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva(
  [
    "rounded-lg",
    "cursor-pointer",
    "tracking-wide",
    "inline-flex",
    "items-center",
    "justify-center",
    "relative",
    "transition",
    "outline-none",
    " focus:scale-[0.98]",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-indigo-500', 'text-white",
          "font-semibold",
          "shadow",
          "hover:bg-indigo-600",
          "hover-shadow-md",
          " ring-indigo-500/70",
          "ring-offset-2",
          " focus-visible:ring-2 ",
          "disabled:bg-indigo-500/50",
          "disabled:shadow",
        ],
        secondary: [],
        destructive: [],
        link: [],
        ghost: [],
      },
      size: {
        sm: ["font-medium", "text-sm", "py-1", "px-12"],
        md: ["py-2", "px-12", "text-md", "font-medium"],
        lg: ["text-lg", "py-3", "px-10"],
        xl: ["text-lg", "py-3", "px-12"],
        xxl: ["text-lg", "py-3", "px-12"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);
const Loading = () => (
  <div className="absolute inline-flex items-center">
    <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[inherit]"></div>
  </div>
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {
    loading?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, size, loading, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(variants({ variant, size, className }))}
        {...rest}
      >
        {loading && <Loading />}
        <span
          className={clsx("transition", {
            "opacity-0": loading,
            "opacity-100": !loading,
          })}
        >
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
// function twMerge(arg0: string): string | undefined {
//   throw new Error("Function not implemented.");
// }
