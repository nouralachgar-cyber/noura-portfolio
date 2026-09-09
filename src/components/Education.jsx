import { motion } from "framer-motion"
import { GraduationCap, HeartHandshake, Award, Calendar, MapPin, Sparkles } from "lucide-react"

const education = [
  {
    year: "2026 — Present",
    title: "Web Development Student",
    org: "[Nouaeur Wings Tech]",
    desc: "Currently studying specialized web development techniques, modern frontend frameworks (React, Tailwind CSS), and backend concepts to build full-stack responsive web applications.",
    icon: GraduationCap,
    accent: "from-[#58111A] to-[#7a1a28]",
    status: "In Progress",
  },
  {
    year: "2025 — Finished",
    title: "Red Crescent Volunteer / First Aider",
    org: "Organization: Moroccan Red Crescent",
    desc: "Active volunteer engaged in community service, emergency first aid support, and humanitarian initiatives. Developed strong leadership, crisis management, communication, and teamwork skills through field operations and community awareness campaigns.",
    icon: HeartHandshake,
    accent: "from-rose-500 to-[#58111A]",
    status: "Completed",
  },
  {
    year: "2023 — 2024",
    title: "High School Diploma (Baccalaureate)",
    org: "[High School Al-Farabi / Bousskoura, Morocco]",
    desc: "Earned High School Diploma in Life and Earth Sciences, establishing strong foundational analytical and problem-solving skills.",
    icon: Award,
    accent: "from-[#7a1a28] to-[#58111A]",
    status: "Completed",
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-20 lg:py-28 bg-[#121212] overflow-hidden">
      {/* subtle top border + ambient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#58111A]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-300">
            <GraduationCap className="h-3.5 w-3.5 text-[#e89ca8]" /> Education & Journey
          </div>
          <h2 className="mt-5 font-display text-[32px] lg:text-[44px] font-bold tracking-[-0.02em] leading-none text-[#FFFFF0]">
            Education
          </h2>
          <p className="mt-4 text-[14px] leading-6 text-zinc-400 max-w-xl mx-auto">
            Academic formation and volunteer experience — building technical depth and human resilience.
          </p>
        </motion.div>

        {/* timeline */}
        <div className="relative mt-12 lg:mt-14 max-w-4xl mx-auto">
          {/* vertical line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-[#58111A]/30 to-white/5 -translate-x-1/2" />

          <div className="grid gap-6 md:gap-8">
            {education.map((item, i) => (
              <motion.div
                key={item.year + item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`relative ${i % 2 === 0 ? "md:pr-[calc(50%+1.5rem)] md:text-right" : "md:pl-[calc(50%+1.5rem)] md:ml-auto"}`}
              >
                {/* dot */}
                <div className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#58111A] border-2 border-[#FFFFF0] shadow-[0_0_0_4px_rgba(88,17,26,0.3)] z-10" />
                {/* mobile dot line */}
                <div className="md:hidden absolute left-4 top-6 bottom-6 w-px bg-white/10" />

                <div className="group relative rounded-[1.5rem] bg-[#1e1e1e] border border-white/[0.06] p-[1px] overflow-hidden hover:border-[#58111A]/30 transition-colors duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:ml-0 ml-8">
                  <div className="rounded-[1.45rem] bg-gradient-to-br from-[#1e1e1e] to-[#121212] p-6 lg:p-7 h-full relative">
                    {/* subtle highlight */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                    <div className={`flex gap-4 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                      <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-md shrink-0 border border-white/10`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`flex flex-wrap items-center gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#58111A] text-[#FFFFF0] text-[11px] font-semibold px-3 py-1 tracking-wide border border-white/10">
                            <Calendar className="h-3 w-3 opacity-80" /> {item.year}
                          </span>
                          <span className={`text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border ${item.status === "Completed" ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" : "bg-[#e89ca8]/10 text-[#e89ca8] border-[#e89ca8]/20"}`}>
                            {item.status}
                          </span>
                        </div>

                        <h3 className="mt-3 font-display font-semibold text-[#FFFFF0] text-[17px] lg:text-[18px] leading-tight tracking-tight">
                          {item.title}
                        </h3>

                        <p className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#e89ca8]">
                          <MapPin className="h-3.5 w-3.5 shrink-0 opacity-70" />
                          <span className={i % 2 === 0 ? "md:text-right" : ""}>{item.org}</span>
                        </p>

                        <p className="mt-3 text-[13.5px] leading-6 text-zinc-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* subtle footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-xs text-zinc-400">
            <Sparkles className="h-3.5 w-3.5 text-[#e89ca8]" />
            Learning in public — every project is a chapter
          </div>
        </motion.div>
      </div>
    </section>
  )
}