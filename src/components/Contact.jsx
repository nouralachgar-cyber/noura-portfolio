import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ArrowUpRight, Heart, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-[#080808] overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#58111A]/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-[560px] w-[900px] bg-rose-500/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-300">
              <Heart className="h-3.5 w-3.5 text-[#e89ca8]" /> Let's Work Together
            </div>
            <h2 className="mt-5 font-display text-[32px] lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.05] text-white">
              Got an <span className="text-[#e89ca8]">idea?</span>
              <br />
              Let's build it.
            </h2>
            <p className="mt-4 text-[14px] leading-6 text-zinc-400 max-w-lg">
              I am open to learning opportunities, internships, freelance projects and collaborations that allow me to develop my skills and gain practical experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:nlachgar12@gmail.com">
                <Button variant="primary" size="lg" className="rounded-full h-11 px-6 text-[14px] font-semibold">
                  <Mail className="h-4 w-4" /> nlachgar12@gmail.com
                </Button>
              </a>
              <a href="https://github.com/nouralachgar-cyber" target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg" className="rounded-full h-11 px-6 text-[14px] font-medium">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Responds within 24 hours • Available worldwide
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-3.5"
          >
            {[
              { label: "Email", value: "nlachgar12@gmail.com", href: "mailto:nlachgar12@gmail.com", icon: Mail },
              { label: "GitHub", value: "github.com/nouralachgar-cyber", href: "https://github.com/nouralachgar-cyber", icon: Github },
              { label: "LinkedIn", value: "linkedin.com/in/lachgar-noura-a38611361", href: "https://linkedin.com/in/lachgar-noura-a38611361", icon: Linkedin },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label !== "Email" ? "_blank" : undefined}
                rel={c.label !== "Email" ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl bg-white/[0.04] backdrop-blur border border-white/[0.06] p-4 lg:p-5 hover:bg-[#FFFFF0] hover:border-zinc-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-[#58111A] flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300 shrink-0 border border-white/10">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] tracking-[0.12em] uppercase font-medium text-zinc-500 group-hover:text-zinc-500">{c.label}</div>
                  <div className="font-medium text-white group-hover:text-zinc-900 truncate text-[13px] lg:text-sm leading-tight mt-0.5">{c.value}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            ))}

            <div className="rounded-2xl bg-gradient-to-br from-[#58111A] to-[#be123c] p-6 text-white relative overflow-hidden border border-white/10 shadow-lg">
              <div className="absolute -right-10 -bottom-10 h-32 w-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 text-white/80 text-[11px] tracking-[0.14em] uppercase font-medium">
                  <Send className="h-3.5 w-3.5" /> Quick message
                </div>
                <p className="mt-2.5 font-display font-semibold text-[17px] leading-tight">Ready to start your next project?</p>
                <p className="text-[13px] text-white/75 mt-1.5 leading-relaxed">Response within 24 hours • Let's make it aesthetic & functional.</p>
                <a href="mailto:nlachgar12@gmail.com" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FFFFF0] text-[#121212] px-5 py-2.5 text-[13px] font-semibold hover:bg-white transition-colors shadow-sm">
                  Say Hello <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 lg:mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-[#58111A] border border-white/10 flex items-center justify-center text-white font-display font-bold text-xs">N</div>
            <span className="font-display font-semibold text-white text-sm">Noura Lachgar</span>
            <span className="text-zinc-600 text-sm">—</span>
            <span className="text-[13px] text-zinc-500">Thank you for visiting</span>
          </div>
          <div className="flex items-center gap-5 text-[13px] text-zinc-500">
            <span className="tracking-[0.12em] uppercase text-[11px] font-medium hidden sm:inline">Learning. Building. Improving.</span>
            <span className="text-zinc-600">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
