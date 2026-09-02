import { motion } from "framer-motion"
import { Heart, Coffee, Lightbulb, Target, Quote } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#58111A]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-rose-200">
            <Heart className="h-3.5 w-3.5" /> About Me
          </div>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Curious mind,{" "}
            <span className="bg-gradient-to-r from-rose-300 to-[#58111A] bg-clip-text text-transparent">creative heart</span>
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            A dedicated Web Development student blending logic with aesthetics — learning in public, building with passion.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          {/* main card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 relative rounded-[2rem] bg-gradient-to-br from-[#58111A] to-[#3d0c12] p-[1px] overflow-hidden"
          >
            <div className="rounded-[2rem] bg-gradient-to-br from-[#1a0a0e] to-[#0a0a0a] p-8 lg:p-10 h-full">
              <Quote className="h-8 w-8 text-rose-300/50 mb-6" />
              <div className="space-y-5 text-[15px] leading-7 text-zinc-300">
                <p>
                  I am a <span className="text-white font-medium">dedicated and curious Web Development student</span> who enjoys learning new technologies and applying them through practical projects.
                </p>
                <p>
                  My current focus is on developing <span className="text-rose-200">clean, responsive and interactive</span> websites while strengthening my understanding of programming fundamentals and web principles.
                </p>
                <p className="text-zinc-400">
                  I believe that continuous learning, practice and real-world projects are essential for becoming a successful developer. Currently working toward becoming a professional Full-Stack Developer.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Clean Code", "Responsive", "Interactive", "Semantics", "UX First"].map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-medium text-white">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-rose-500/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* side stack */}
          <div className="lg:col-span-2 grid gap-6">
            {[
              { icon: Lightbulb, title: "Continuous Learning", desc: "Exploring new tech every week, building to learn.", color: "from-amber-500/20 to-orange-500/20 border-amber-500/20" },
              { icon: Target, title: "Detail Oriented", desc: "Pixel-perfect, semantic & maintainable code.", color: "from-rose-500/20 to-pink-500/20 border-rose-500/20" },
              { icon: Coffee, title: "Persistence", desc: "Debugging with patience, shipping with pride.", color: "from-violet-500/20 to-purple-500/20 border-violet-500/20" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className={`rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur border p-6 flex gap-4`}
              >
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-zinc-900" />
                </div>
                <div>
                  <div className="font-semibold text-white">{item.title}</div>
                  <div className="text-sm text-zinc-400 mt-1 leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

