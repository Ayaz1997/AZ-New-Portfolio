import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "btn-primary relative overflow-hidden border border-primary bg-primary text-primary-foreground shadow-[inset_0_1px_hsl(var(--primary-foreground)/0.4),0_4px_6px_-1px_rgb(0_0_0/0.1),0_2px_4px_-2px_rgb(0_0_0/0.1)] hover:bg-primary/90 active:bg-primary active:shadow-[inset_0_1px_hsl(var(--primary-foreground)/0.2)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-gradient-to-b from-card to-secondary shadow-sm hover:shadow-md hover:-translate-y-px active:shadow-none active:translate-y-px",
        secondary:
          "btn-secondary relative overflow-hidden border border-secondary bg-secondary text-secondary-foreground shadow-[inset_0_1px_hsl(var(--secondary-foreground)/0.4),0_4px_6px_-1px_rgb(0_0_0/0.1),0_2px_4px_-2px_rgb(0_0_0/0.1)] hover:bg-secondary/90 active:bg-secondary active:shadow-[inset_0_1px_hsl(var(--secondary-foreground)/0.2)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-3 py-1.5",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-4",
        icon: "h-10 w-10 rounded-lg",
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
