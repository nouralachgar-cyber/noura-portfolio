import { cn } from "@/lib/utils"

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("grid w-full auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({ className, title, description, header, icon, children }) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-xl transition duration-200 hover:shadow-xl hover:shadow-rose-900/10 hover:border-rose-900/30",
        className
      )}
    >
      {header && <div className="flex flex-1 w-full">{header}</div>}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon && <div className="mb-3 text-rose-300">{icon}</div>}
        <div className="font-display font-semibold text-white mb-2 text-[17px]">{title}</div>
        <div className="font-sans text-sm font-normal text-zinc-400 leading-relaxed">{description}</div>
      </div>
      {children}
    </div>
  )
}
