import { cn } from "@/lib/utils"

export function HoverBorderGradient({ children, className, containerClassName, as: Tag = "div", ...props }) {
  return (
    <Tag className={cn("relative flex overflow-hidden rounded-2xl p-[1px] group", containerClassName)} {...props}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#58111A] via-rose-500 to-[#58111A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={cn("relative flex w-full rounded-2xl bg-[#121212] backdrop-blur", className)}>{children}</div>
    </Tag>
  )
}

export function MagicCard({ children, className, gradientColor = "#58111A", ...props }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-xl", className)} {...props}>
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at 0% 0%, ${gradientColor}15, transparent 80%)`,
        }}
      />
      {children}
    </div>
  )
}
