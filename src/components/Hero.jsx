import { motion } from "framer-motion"
import { ArrowUpRight, Code2, Sparkles, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/aceternity/spotlight"
import { GridBackground } from "@/components/aceternity/grid-background"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center">
      <GridBackground className="absolute inset-0 opacity-[0.4]" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#58111A" />

      {/* subtle ambient orbs - softer */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-[#58111A]/20 via-rose-500/10 to-transparent blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[840px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#58111A]/12 to-transparent blur-3xl" />

      <div className="relative z-20 mx-auto max-w-7xl w-full px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[640px]"
          >
            {/* availability pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 text-xs font-medium text-zinc-300 shadow-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="tracking-wide">Available for freelance & internships</span>
              <Sparkles className="h-3 w-3 text-[#e89ca8] shrink-0" />
            </div>

            <h1 className="mt-7 font-display font-bold tracking-[-0.03em] leading-[0.88]">
              <span className="block text-[42px] sm:text-6xl lg:text-[68px] xl:text-[74px] text-white">Noura</span>
              <span className="block text-[42px] sm:text-6xl lg:text-[68px] xl:text-[74px] bg-gradient-to-r from-[#e89ca8] via-rose-300 to-[#58111A] bg-clip-text text-transparent pb-1">
                Lachgar
              </span>
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-[#e89ca8] to-transparent" />
              <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] uppercase text-zinc-400">
                Web Development Student
              </p>
            </div>

            <p className="mt-6 max-w-[560px] text-[16px] sm:text-[17px] leading-7 text-zinc-400 font-light">
              Passionate about building <span className="text-[#FFFFF0] font-medium">clean, responsive</span> and
              <span className="text-[#FFFFF0] font-medium"> interactive</span> web experiences. Obsessed with details, in love
              with code — crafting digital products with a dev-girl touch.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects">
                <Button variant="primary" size="lg" className="group rounded-full h-11 px-7 text-[14px] font-semibold">
                  View Projects
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" size="lg" className="rounded-full h-11 px-7 text-[14px] font-medium">
                  Get In Touch
                </Button>
              </a>
            </div>

            {/* trusted row - refined */}
            <div className="mt-9 flex items-center gap-5">
              <div className="flex -space-x-2">
                {[
                  { l: "H", bg: "bg-[#E34F26]" },
                  { l: "C", bg: "bg-[#1572B6]" },
                  { l: "J", bg: "bg-[#F7DF1E] text-zinc-900" },
                  { l: "R", bg: "bg-[#61DAFB] text-zinc-900" },
                ].map((t) => (
                  <div
                    key={t.l}
                    className={`h-9 w-9 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold text-white shadow-sm ${t.bg}`}
                  >
                    {t.l}
                  </div>
                ))}
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div className="text-sm leading-tight">
                <div className="font-semibold text-white text-[13px]">Trusted by curiosity</div>
                <div className="text-zinc-500 text-xs mt-0.5">Learning. Building. Improving.</div>
              </div>
            </div>

            <div className="mt-6 flex gap-2.5">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="h-10 w-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.10] hover:border-white/15 transition-all duration-200">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-10 w-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.10] hover:border-white/15 transition-all duration-200">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:nlachgar12@gmail.com" aria-label="Email" className="h-10 w-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.10] hover:border-white/15 transition-all duration-200">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right - Profile Image (redesigned) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end w-full"
          >
            <div className="relative mx-auto lg:mx-0">
              {/* ambient radial glows - depth layer */}
              <div className="pointer-events-none absolute -inset-8 -z-10">
                <div className="absolute inset-0 bg-[#58111A]/20 blur-3xl rounded-[2.5rem]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] bg-gradient-to-br from-[#58111A]/25 via-[#e89ca8]/10 to-transparent blur-[60px] rounded-full" />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-32 w-[80%] bg-[#58111A]/15 blur-2xl rounded-full" />
              </div>

              {/* high-end frame: gradient border + glassmorphism */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group/frame relative rounded-[2rem] p-[1px] bg-gradient-to-br from-white/[0.14] via-white/[0.05] to-[#58111A]/30 shadow-[0_24px_64px_rgba(0,0,0,0.55),0_1px_0_rgba(255,255,255,0.07)_inset]"
              >
                {/* shine border on hover */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/frame:opacity-100 transition-opacity duration-700 blur-[1px] pointer-events-none" />

                <div className="relative rounded-[1.95rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.06] p-3">
                  <div className="relative overflow-hidden rounded-[1.55rem] bg-[#121212] isolate">
                    {/* image with scale on hover */}
                    <motion.img
                      src="/profile.jpg"
                      alt="Noura Lachgar - Web Developer"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-[440px] w-[315px] sm:h-[460px] sm:w-[340px] lg:h-[500px] lg:w-[370px] object-cover object-top will-change-transform"
                    />

                    {/* subtle vignette + top fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/75 via-[#0a0a0a]/10 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

                    {/* border shine sweep (animated on hover) */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent -skew-x-12 opacity-0 group-hover/frame:opacity-100 pointer-events-none"
                    />

                    {/* top badge - Web Developer */}
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="absolute top-4 left-4 right-4 flex justify-between items-start gap-2"
                    >
                      <div className="flex items-center gap-2 rounded-full bg-[#FFFFF0]/95 backdrop-blur-md px-3 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-white/20">
                        <span className="h-6 w-6 rounded-full bg-[#58111A] flex items-center justify-center shrink-0">
                          <Code2 className="h-3.5 w-3.5 text-white" />
                        </span>
                        <span className="text-xs font-semibold tracking-wide text-[#121212]">Web Developer</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      </div>
                      {/* tech dots */}
                      <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-[#1e1e1e]/80 backdrop-blur-md border border-white/10 px-2.5 py-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#e89ca8] animate-pulse" />
                        <span className="text-[10px] font-mono font-medium tracking-wide text-white">Available</span>
                      </div>
                    </motion.div>

                    {/* bottom glass card - interactive */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#1e1e1e]/70 backdrop-blur-xl border border-white/15 p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#e89ca8]" />
                            <span className="text-white font-semibold text-[13px] leading-none tracking-tight">Clean Code • Responsive</span>
                          </div>
                          <div className="text-white/60 text-[11px] mt-1.5 font-medium">Interactive UI with React & Tailwind</div>
                          {/* mini tech stack */}
                          <div className="mt-2 flex items-center gap-1.5">
                            {["R", "T", "J"].map((t) => (
                              <span key={t} className="h-5 w-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[9px] font-bold text-white">
                                {t}
                              </span>
                            ))}
                            <span className="text-[10px] text-white/50 ml-1">+2 more</span>
                          </div>
                        </div>
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#58111A] to-[#e89ca8] flex items-center justify-center shrink-0 shadow-md border border-white/10">
                          <Sparkles className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* floating decorative badges */}
            
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, y: 2 }}
                className="absolute -left-3 sm:-left-5 xl:-left-8 bottom-20 hidden lg:flex items-center gap-3 rounded-2xl bg-[#1e1e1e] text-white shadow-[0_12px_32px_rgba(0,0,0,0.4)] border border-white/10 px-4 py-3 z-10"
              >
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#e89ca8] to-rose-400 flex items-center justify-center text-[#58111A] shadow-sm">✦</div>
                <div className="leading-tight">
                  <div className="text-xs font-bold tracking-tight">Pixel Perfect</div>
                  <div className="text-[11px] text-zinc-400 font-medium">Attention to detail</div>
                </div>
              </motion.div>

              {/* mobile-only badge - centered below image */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="lg:hidden mt-4 flex justify-center gap-2"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-[#1e1e1e] border border-white/10 px-4 py-2 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-[#e89ca8] animate-pulse" />
                  <span className="text-xs font-medium text-white">Pixel Perfect</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs font-medium text-zinc-300">2+ Years Journey</span>
                </div>
              </motion.div>

              {/* decorative corner accent */}
              <div className="pointer-events-none absolute -top-2 -right-2 h-16 w-16 rounded-2xl border border-[#e89ca8]/20 hidden lg:block" />
              <div className="pointer-events-none absolute -bottom-3 -left-3 h-20 w-20 rounded-2xl bg-[#58111A]/10 blur-xl hidden lg:block" />
            </div>
          </motion.div>
        </div>

        {/* bottom stats - refined */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mt-14 lg:mt-16 grid grid-cols-3 lg:grid-cols-[auto_auto_auto_1fr] gap-6 lg:gap-10 border-t border-white/[0.06] pt-7"
        >
          {[
            { k: "5+", v: "Tech Stack" },
            { k: "100%", v: "Responsive" },
            { k: "∞", v: "Curiosity" },
          ].map((s) => (
            <div key={s.v} className="text-left">
              <div className="font-display text-[22px] font-bold tracking-tight text-white leading-none">{s.k}</div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-zinc-500 mt-1.5 font-medium">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
