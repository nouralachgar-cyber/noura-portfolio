import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ArrowUpRight, Heart, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-[#080808] overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#58111A]/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-zinc-300">
              <Heart className="h-3.5 w-3.5 text-rose-400" /> Let's Work Together
            </div>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Got an <span className="text-rose-300">idea?</span>
              <br />
              Let's build it.
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed max-w-lg">
              I am open to learning opportunities, internships, freelance projects and collaborations that allow me to develop my skills and gain practical experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:nlachgar12@gmail.com">
                <Button variant="primary" size="lg" className="rounded-full">
                  <Mail className="h-4 w-4" /> nlachgar12@gmail.com
                </Button>
              </a>
              <a href="https://github.com/nouralachgar-cyber" target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg" className="rounded-full">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
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
                className="group flex items-center gap-4 rounded-2xl bg-white/[0.04] backdrop-blur border border-white/[0.06] p-5 hover:bg-white hover:border-white hover:shadow-xl transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#58111A] to-rose-600 flex items-center justify-center text-white group-hover:scale-105 transition">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs tracking-widest uppercase text-zinc-500 group-hover:text-zinc-400">{c.label}</div>
                  <div className="font-medium text-white group-hover:text-zinc-900 truncate text-sm">{c.value}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            ))}

            <div className="rounded-2xl bg-gradient-to-br from-[#58111A] to-rose-600 p-6 text-white relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-32 w-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase font-medium">
                  <Send className="h-3.5 w-3.5" /> Quick message
                </div>
                <p className="mt-2 font-display font-semibold text-lg leading-tight">Ready to start your next project?</p>
                <p className="text-sm text-white/80 mt-1">Response within 24 hours • Let's make it aesthetic & functional.</p>
                <a href="mailto:nlachgar12@gmail.com" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-5 py-2.5 text-sm font-semibold hover:bg-zinc-100 transition">
                  Say Hello <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#58111A] to-rose-600 flex items-center justify-center text-white font-display font-bold text-xs">N</div>
            <span className="font-display font-semibold text-white">Noura Lachgar</span>
            <span className="text-zinc-600">—</span>
            <span className="text-sm text-zinc-500">Thank you for visiting</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <span className="tracking-widest uppercase text-xs font-medium">Learning. Building. Improving.</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

