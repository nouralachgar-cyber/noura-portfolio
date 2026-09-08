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
    <section id="strengths" className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#58111A]/10 via-transparent to-rose-500/5" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-zinc-300">
              <Sparkles className="h-3.5 w-3.5 text-rose-300" /> Professional Strengths
            </div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Soft skills,
              <br />
              <span className="bg-gradient-to-r from-rose-300 to-zinc-200 bg-clip-text text-transparent">hard impact.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 leading-relaxed">
            More than code — mindset, taste, and resilience that shape every pixel and pull request.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-[1.5rem] bg-white/[0.04] backdrop-blur border border-white/[0.06] p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all hover:-translate-y-1"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}>
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-white text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition">
                <span className="h-px flex-1 bg-white/10" />
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

