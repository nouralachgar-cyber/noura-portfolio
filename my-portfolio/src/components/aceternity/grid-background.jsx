import { cn } from "@/lib/utils"

export function GridBackground({ children, className }) {
  return (
    <div className={cn("relative w-full bg-[#0a0a0a]", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function DotBackground({ children, className }) {
  return (
    <div className={cn("relative flex w-full items-center justify-center bg-[#0a0a0a]", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(#3a3a3a_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      <div className="absolute pointer-events-none inset-0 bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}
