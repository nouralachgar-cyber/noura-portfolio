import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e89ca8]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#58111A] text-[#FFFFF0] hover:bg-[#7a1a28] shadow-[0_4px_16px_rgba(88,17,26,0.25)] border border-[#58111A] hover:shadow-[0_6px_20px_rgba(88,17,26,0.3)]",
        primary: "bg-gradient-to-br from-[#58111A] to-[#be123c] text-white hover:from-[#7a1a28] hover:to-[#e11d48] shadow-[0_4px_16px_rgba(88,17,26,0.25)] border border-white/10",
        secondary: "bg-white/[0.06] text-white backdrop-blur border border-white/[0.12] hover:bg-white/[0.10] hover:border-white/20",
        outline: "border border-white/20 bg-transparent text-white hover:bg-[#FFFFF0] hover:text-[#121212] hover:border-[#FFFFF0]",
        ghost: "text-white/70 hover:text-white hover:bg-white/10",
      },
      size: {
        default: "h-10 px-6 py-2 text-[13px]",
        sm: "h-8 px-4 text-xs",
        lg: "h-11 px-8 text-[14px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
