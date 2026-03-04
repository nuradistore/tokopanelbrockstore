import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 will-change-transform active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-red-700 text-primary-foreground shadow-[0_18px_40px_-18px_rgba(255,88,88,0.55)] hover:shadow-[0_24px_60px_-22px_rgba(255,88,88,0.65)] hover:-translate-y-[1px]",
        destructive:
          "bg-gradient-to-r from-destructive to-red-900 text-destructive-foreground hover:-translate-y-[1px]",
        outline:
          "border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:-translate-y-[1px]",
        secondary:
          "bg-white/5 text-secondary-foreground border border-white/10 hover:bg-white/10 hover:-translate-y-[1px]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-xl",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
