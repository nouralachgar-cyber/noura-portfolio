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
    <section id="skills" className="relative py-20 lg:py-28 bg-[#0a0a0a] overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#58111A]/15 border border-[#58111A]/20 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-[#e89ca8]">
            <Wrench className="h-3.5 w-3.5" /> Technical Skills
          </div>
          <h2 className="mt-5 font-display text-[32px] lg:text-[44px] font-bold tracking-[-0.02em] leading-none text-white">
            Stack with <span className="text-[#e89ca8]">style</span>
          </h2>
          <p className="mt-4 text-[14px] leading-6 text-zinc-400">Curated tools I use to craft responsive, interactive experiences — with a focus on clean semantics & modern workflows.</p>
        </motion.div>

        <div className="mt-10 lg:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl bg-white/[0.035] backdrop-blur border border-white/[0.06] p-5 lg:p-6 hover:bg-white/[0.06] hover:border-[#58111A]/20 hover:shadow-[0_12px_32px_rgba(88,17,26,0.12)] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-[#58111A]/0 group-hover:to-[#58111A]/[0.06] transition-colors duration-300 pointer-events-none" />
              <div className="relative">
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="h-11 w-11 rounded-xl bg-[#1e1e1e] border border-white/[0.06] flex items-center justify-center p-2.5 group-hover:border-[#e89ca8]/20 transition-colors duration-300 shrink-0">
                    <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain" loading="lazy" />
                  </div>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] uppercase text-zinc-300 border border-white/[0.06] whitespace-nowrap">
                    {skill.level}
                  </span>
                </div>
                <div className="font-semibold text-white text-[14px] tracking-tight">{skill.name}</div>
                <div className="text-xs text-zinc-500 flex items-center gap-1.5 mt-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e89ca8] shrink-0" />
                  {skill.cat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-2.5 lg:gap-3"
        >
          {[
            { icon: Code2, label: "Semantic HTML" },
            { icon: Palette, label: "Responsive Design" },
            { icon: Wrench, label: "Clean Architecture" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full bg-[#FFFFF0] text-[#121212] px-4 py-2 text-[13px] font-medium shadow-sm border border-zinc-200">
              <b.icon className="h-4 w-4 text-[#58111A] shrink-0" />
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
