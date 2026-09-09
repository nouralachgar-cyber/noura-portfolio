import { motion } from "framer-motion"
import { ArrowUpRight, Github, Sparkles, Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Bloom — E-commerce Concept",
    description: "A chic, responsive shop interface for a modern beauty brand. Built with semantic HTML, sleek CSS and interactive JS.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-rose-500 via-pink-500 to-[#58111A]",
    status: "Concept",
  },
  {
    title: "Nebras Coffee — Web App & Online Ordering",
    description: "A full-stack web application and interactive digital menu for a specialty coffee. features dynamic product display for coffee, fresh juices, and desserts, with an integrated online ordering system.",
    tech: ["JavaScript","CSS","HTML","React", "Tailwind"],
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    status: "Live",
  },
  {
    title: "TaskFlow — Minimal Tasks",
    description: "Upcoming productivity app with glassmorphism UI and delightful micro-interactions.",
    tech: ["React", "CSS"],
    gradient: "from-amber-500 to-orange-600",
    status: "In Progress",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#58111A]/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-300">
            <Layers className="h-3.5 w-3.5 text-[#e89ca8]" /> Projects
          </div>
          <h2 className="mt-5 font-display text-[32px] lg:text-[44px] font-bold tracking-[-0.02em] leading-none text-white">
            Selected <span className="text-[#e89ca8]">works</span>
          </h2>
          <p className="mt-4 text-[14px] leading-6 text-zinc-400">Real projects, real learning. Each card is a story of curiosity turned into code.</p>
        </motion.div>

        <div className="mt-10 lg:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group relative rounded-[1.5rem] bg-white/[0.035] backdrop-blur border border-white/[0.06] overflow-hidden hover:border-white/[0.09] hover:bg-white/[0.045] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col"
            >
              <div className={`h-44 lg:h-48 bg-gradient-to-br ${p.gradient} relative p-5 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
                <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-white/15 rounded-full blur-2xl" />
                <div className="relative flex justify-between items-start gap-3">
                  <Badge variant="secondary" className="bg-white text-zinc-900 border-white/20 shadow-sm text-xs font-semibold">
                    {p.status}
                  </Badge>
                  <div className="h-8 w-8 rounded-xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white group-hover:rotate-12 group-hover:bg-white/20 transition-all duration-300 shrink-0">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative">
                  <div className="inline-flex items-center rounded-xl bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-bold text-zinc-900 shadow-sm border border-white/20">
                    <Sparkles className="h-3 w-3 mr-1.5 text-[#58111A] shrink-0" />
                    {p.title.split("—")[0].trim()}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 gap-3">
                <h3 className="font-display font-semibold text-white text-[16px] leading-tight tracking-tight">{p.title}</h3>
                <p className="text-[13.5px] leading-6 text-zinc-400 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-white/[0.06] border border-white/[0.07] px-2.5 py-1 text-xs font-medium text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex gap-2">
                  <Button variant="secondary" size="sm" className="flex-1 rounded-full h-9 text-xs font-semibold bg-white/[0.06] border-white/10 hover:bg-white hover:text-zinc-900 hover:border-white transition-colors">
                    <Github className="h-3.5 w-3.5" /> Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1 rounded-full h-9 text-xs font-semibold">
                    Live <ArrowUpRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 text-center"
        >
          <p className="text-[13px] text-zinc-500">Want to see more? Let's build your idea next.</p>
          <a href="#contact" className="inline-flex mt-4">
            <Button variant="outline" className="rounded-full h-10 px-6 text-sm font-medium">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
