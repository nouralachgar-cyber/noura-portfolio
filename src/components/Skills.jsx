import { motion } from "framer-motion"
import { Code2, Palette, Wrench } from "lucide-react"

const skills = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26", level: "Advanced", cat: "Frontend" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css/1572B6", level: "Advanced", cat: "Frontend" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", level: "Intermediate", cat: "Frontend" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", level: "Learning", cat: "Frontend" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", level: "Intermediate", cat: "Styling" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: "Daily", cat: "Tools" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", level: "Intermediate", cat: "Tools" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", level: "Intermediate", cat: "Tools" },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#58111A]/20 border border-[#58111A]/30 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-rose-200">
            <Wrench className="h-3.5 w-3.5" /> Technical Skills
          </div>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Stack with <span className="text-rose-300">style</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">Curated tools I use to craft responsive, interactive experiences — with a focus on clean semantics & modern workflows.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-white/[0.04] backdrop-blur border border-white/[0.06] p-6 hover:bg-white/[0.06] hover:border-rose-900/30 hover:shadow-xl hover:shadow-rose-900/10 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/0 via-transparent to-[#58111A]/0 group-hover:from-rose-500/5 group-hover:to-[#58111A]/10 transition" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center p-2.5 group-hover:border-rose-900/30 transition">
                    <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain" />
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase text-zinc-300 border border-white/10">
                    {skill.level}
                  </span>
                </div>
                <div className="font-semibold text-white">{skill.name}</div>
                <div className="text-xs text-zinc-500 flex items-center gap-1.5 mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                  {skill.cat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: Code2, label: "Semantic HTML" },
            { icon: Palette, label: "Responsive Design" },
            { icon: Wrench, label: "Clean Architecture" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full bg-white text-zinc-900 px-4 py-2 text-sm font-medium shadow-lg">
              <b.icon className="h-4 w-4 text-[#58111A]" />
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

