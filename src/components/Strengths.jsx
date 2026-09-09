import { motion } from "framer-motion"
import { Brain, Eye, Rocket, ShieldCheck, Sparkles } from "lucide-react"

const strengths = [
  {
    icon: Brain,
    title: "Problem Solving",
    desc: "Analytical mindset focused on breaking down complex problems and finding efficient, elegant code solutions.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    desc: "Meticulous approach to writing clean code, precision in layout design, and seamless user experiences.",
    gradient: "from-rose-500 to-[#58111A]",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    desc: "Passionate about discovering new technologies, practices, and constantly evolving as a web developer.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: ShieldCheck,
    title: "Persistence",
    desc: "Determined attitude toward debugging, troubleshooting, and overcoming development challenges.",
    gradient: "from-emerald-500 to-teal-600",
  },
]

export default function Strengths() {
  return (
    <section id="strengths" className="relative py-20 lg:py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#58111A]/[0.07] via-transparent to-rose-500/[0.03] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-300">
              <Sparkles className="h-3.5 w-3.5 text-[#e89ca8]" /> Professional Strengths
            </div>
            <h2 className="mt-5 font-display text-[32px] lg:text-[44px] font-bold tracking-[-0.02em] leading-[0.95] text-white">
              Soft skills,
              <br />
              <span className="bg-gradient-to-r from-[#e89ca8] to-zinc-200 bg-clip-text text-transparent">hard impact.</span>
            </h2>
          </div>
          <p className="max-w-md text-[14px] leading-6 text-zinc-400">
            More than code — mindset, taste, and resilience that shape every pixel and pull request.
          </p>
        </motion.div>

        <div className="mt-10 lg:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group relative rounded-[1.5rem] bg-white/[0.035] backdrop-blur border border-white/[0.06] p-6 hover:bg-white/[0.05] hover:border-white/[0.08] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-md`}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-white text-[16px] tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-6 text-zinc-400">{s.desc}</p>
              <div className="mt-6 flex items-center gap-3 text-[11px] font-mono font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors">
                <span className="h-px flex-1 bg-white/10 group-hover:bg-white/15 transition-colors" />
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
