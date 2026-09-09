import { motion } from "framer-motion"
import { Heart, Coffee, Lightbulb, Target, Quote } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#0a0a0a] overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#58111A]/[0.06] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-rose-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header - tighter hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-300">
            <Heart className="h-3.5 w-3.5 text-[#e89ca8]" /> About Me
          </div>
          <h2 className="mt-5 font-display text-[32px] lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.05] text-white">
            Curious mind,{" "}
            <span className="bg-gradient-to-r from-[#e89ca8] to-[#58111A] bg-clip-text text-transparent">creative heart</span>
          </h2>
          <p className="mt-4 text-[15px] leading-6 text-zinc-400 max-w-xl mx-auto">
            A dedicated Web Development student blending logic with aesthetics — learning in public, building with passion.
          </p>
        </motion.div>

        <div className="mt-12 lg:mt-14 grid lg:grid-cols-5 gap-6 lg:gap-6">
          {/* main card - refined padding & border */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-3 relative rounded-[1.75rem] bg-gradient-to-br from-[#58111A] to-[#3d0c12] p-[1px] overflow-hidden shadow-[0_16px_40px_rgba(88,17,26,0.15)]"
          >
            <div className="rounded-[1.7rem] bg-gradient-to-br from-[#1a0a0e] to-[#0a0a0a] p-7 sm:p-8 lg:p-9 h-full relative overflow-hidden">
              {/* subtle top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <Quote className="h-7 w-7 text-[#e89ca8]/40 mb-6" />
              <div className="space-y-4 text-[14.5px] leading-7 text-zinc-300">
                <p>
                  I am a <span className="text-white font-medium">dedicated and curious Web Development student</span> who enjoys learning new technologies and applying them through practical projects.
                </p>
                <p>
                  My current focus is on developing <span className="text-[#e89ca8]">clean, responsive and interactive</span> websites while strengthening my understanding of programming fundamentals and web principles.
                </p>
                <p className="text-zinc-400 text-[14px] leading-6">
                  I believe that continuous learning, practice and real-world projects are essential for becoming a successful developer. Currently working toward becoming a professional Full-Stack Developer.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Clean Code", "Responsive", "Interactive", "Semantics", "UX First"].map((tag) => (
                  <span key={tag} className="rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-xs font-medium text-zinc-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute -bottom-12 -right-12 h-36 w-36 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* side stack - refined */}
          <div className="lg:col-span-2 grid gap-4 sm:gap-5 content-start">
            {[
              { icon: Lightbulb, title: "Continuous Learning", desc: "Exploring new tech every week, building to learn.", tint: "border-amber-500/15 bg-amber-500/[0.06]" },
              { icon: Target, title: "Detail Oriented", desc: "Pixel-perfect, semantic & maintainable code.", tint: "border-rose-500/15 bg-rose-500/[0.06]" },
              { icon: Coffee, title: "Persistence", desc: "Debugging with patience, shipping with pride.", tint: "border-violet-500/15 bg-violet-500/[0.06]" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + i * 0.07, duration: 0.45 }}
                className={`group rounded-2xl backdrop-blur border p-5 flex gap-4 hover:bg-white/[0.05] hover:border-white/[0.08] transition-colors duration-200 ${item.tint}`}
              >
                <div className="h-10 w-10 rounded-xl bg-[#FFFFF0] flex items-center justify-center shrink-0 shadow-sm border border-zinc-200">
                  <item.icon className="h-5 w-5 text-[#1e1e1e]" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white text-[14px] tracking-tight">{item.title}</div>
                  <div className="text-[13px] text-zinc-400 mt-1 leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
