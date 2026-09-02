import { motion } from "framer-motion"
import { ArrowUpRight, Code2, Sparkles, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/aceternity/spotlight"
import { GridBackground } from "@/components/aceternity/grid-background"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center">
      <GridBackground className="absolute inset-0" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#58111A" />

      {/* soft orbs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#58111A]/30 via-rose-500/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#58111A]/20 to-transparent blur-3xl" />

      <div className="relative z-20 mx-auto max-w-7xl w-full px-6 lg:px-8 py-28 lg:py-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-900/30 bg-rose-950/30 backdrop-blur px-3 py-1 text-xs font-medium text-rose-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400"></span>
              </span>
              Available for freelance & internships
              <Sparkles className="h-3 w-3 text-rose-300" />
            </div>

            <h1 className="mt-6 font-display font-bold tracking-tight leading-[0.9]">
              <span className="block text-5xl sm:text-6xl lg:text-[72px] text-white">Noura</span>
              <span className="block text-5xl sm:text-6xl lg:text-[72px] bg-gradient-to-r from-[#e89ca8] via-rose-400 to-[#58111A] bg-clip-text text-transparent pb-2">
                Lachgar
              </span>
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-rose-400 to-transparent" />
              <p className="font-mono text-sm tracking-widest uppercase text-rose-200/80">
                Web Development Student
              </p>
            </div>

            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-zinc-400">
              Passionate about building <span className="text-white font-medium">clean, responsive</span> and
              <span className="text-white font-medium"> interactive</span> web experiences. Obsessed with details, in love
              with code — crafting digital products with a dev-girl touch.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects">
                <Button variant="primary" size="lg" className="group rounded-full">
                  View Projects
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" size="lg" className="rounded-full">
                  Get In Touch
                </Button>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                {["HTML", "CSS", "JS", "React"].map((t) => (
                  <div
                    key={t}
                    className="h-9 w-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-bold text-zinc-300"
                  >
                    {t[0]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-white">Trusted by curiosity</div>
                <div className="text-zinc-500">Learning. Building. Improving.</div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:nlachgar12@gmail.com" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[560px] flex items-center justify-center"
          >
            <div className="relative">
              {/* glow behind */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#58111A] via-rose-600/20 to-transparent rounded-[2.5rem] blur-2xl opacity-60" />

              {/* card */}
              <div className="relative rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-3 shadow-2xl">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#121212]">
                  <img
                    src="/profile.jpg"
                    alt="Noura Lachgar"
                    className="h-[420px] w-[340px] lg:h-[480px] lg:w-[360px] object-cover object-top"
                  />
                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

                  {/* floating tech pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 shadow-lg">
                    <Code2 className="h-4 w-4 text-[#58111A]" />
                    <span className="text-xs font-semibold text-zinc-900">Frontend Developer</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold text-sm">Clean Code • Responsive</div>
                        <div className="text-white/70 text-xs">Interactive UI with React</div>
                      </div>
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#58111A] to-rose-500 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-16 hidden lg:flex items-center gap-2 rounded-2xl bg-white shadow-xl border border-zinc-100 px-4 py-3"
              >
                <div className="h-8 w-8 rounded-lg bg-[#58111A] flex items-center justify-center text-white text-xs font-bold">{"</>"}</div>
                <div>
                  <div className="text-xs font-bold text-zinc-900">2+ Years</div>
                  <div className="text-[11px] text-zinc-500">Learning Journey</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 bottom-20 hidden lg:flex items-center gap-2 rounded-2xl bg-zinc-900 text-white shadow-xl border border-white/10 px-4 py-3"
              >
                <div className="h-8 w-8 rounded-lg bg-rose-500 flex items-center justify-center">✦</div>
                <div>
                  <div className="text-xs font-bold">Pixel Perfect</div>
                  <div className="text-[11px] text-zinc-400">Attention to detail</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4 lg:gap-8 border-t border-white/[0.06] pt-8"
        >
          {[
            { k: "5+", v: "Tech Stack" },
            { k: "100%", v: "Responsive" },
            { k: "∞", v: "Curiosity" },
          ].map((s) => (
            <div key={s.v} className="text-center lg:text-left">
              <div className="font-display text-2xl font-bold text-white">{s.k}</div>
              <div className="text-xs tracking-widest uppercase text-zinc-500">{s.v}</div>
            </div>
          ))}
          <div className="hidden lg:block col-span-0" />
        </motion.div>
      </div>
    </section>
  )
}

