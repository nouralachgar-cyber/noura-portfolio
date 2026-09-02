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
    title: "Noura Portfolio v2",
    description: "This very portfolio — dev-girl aesthetic, Tailwind v4, shadcn + aceternity vibes. Senior-level polish.",
    tech: ["React", "Tailwind v4", "Motion"],
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
    <section id="projects" className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#58111A]/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-zinc-300">
            <Layers className="h-3.5 w-3.5 text-rose-300" /> Projects
          </div>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Selected <span className="text-rose-300">works</span>
          </h2>
          <p className="mt-4 text-zinc-400">Real projects, real learning. Each card is a story of curiosity turned into code.</p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[1.5rem] bg-white/[0.04] backdrop-blur border border-white/[0.06] overflow-hidden hover:border-white/10 hover:bg-white/[0.06] transition-all flex flex-col"
            >
              <div className={`h-48 bg-gradient-to-br ${p.gradient} relative p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
                <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-white/20 rounded-full blur-2xl" />
                <div className="relative flex justify-between items-start">
                  <Badge variant="secondary" className="bg-white text-zinc-900 border-white">
                    {p.status}
                  </Badge>
                  <div className="h-9 w-9 rounded-xl bg-white/20 backdrop-blur border border-white/20 flex items-center justify-center text-white group-hover:rotate-12 transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative">
                  <div className="inline-flex rounded-xl bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-bold text-zinc-900">
                    <Sparkles className="h-3 w-3 mr-1.5 text-[#58111A] self-center" />
                    {p.title.split("—")[0]}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-white text-lg leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 flex-1">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <Button variant="secondary" size="sm" className="flex-1 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 border-white">
                    <Github className="h-4 w-4" /> Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1 rounded-full">
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
          className="mt-10 text-center"
        >
          <p className="text-sm text-zinc-500">Want to see more? Let's build your idea next.</p>
          <a href="#contact" className="inline-flex mt-3">
            <Button variant="outline" className="rounded-full">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

