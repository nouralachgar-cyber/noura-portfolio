import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#58111A] text-[#FFFFF0] hover:bg-[#7a1a28] shadow-lg shadow-[#58111A]/20 border border-[#58111A]",
        primary: "bg-gradient-to-br from-[#58111A] to-[#be123c] text-white hover:from-[#7a1a28] hover:to-[#e11d48] shadow-lg shadow-rose-900/20",
        secondary: "bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 hover:border-white/30",
        outline: "border border-white/20 bg-transparent text-white hover:bg-white hover:text-[#121212]",
        ghost: "text-white/70 hover:text-white hover:bg-white/10",
      },
      size: {
        default: "h-11 px-7 py-2",
        sm: "h-9 px-5 text-xs",
        lg: "h-12 px-9 text-base",
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
