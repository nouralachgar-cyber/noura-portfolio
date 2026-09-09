import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#offer" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3.5" : "py-5"}`}>
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="h-9 w-9 rounded-xl bg-[#58111A] border border-white/10 flex items-center justify-center text-white font-display font-bold text-[15px] shadow-lg shadow-[#58111A]/20 group-hover:shadow-[#58111A]/30 group-hover:scale-[1.02] transition-all duration-300">
              N
            </div>
            <span className="font-display font-bold text-[18px] tracking-tight text-white">
              Noura<span className="text-[#e89ca8]">.</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 ml-1 rounded-full bg-white/[0.06] border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] uppercase text-zinc-300">
              <Sparkles className="h-3 w-3 text-[#e89ca8]" /> Dev Girl
            </span>
          </a>

          {/* Desktop Nav - pill */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.06] p-1 shadow-sm">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="px-4 py-2 rounded-full text-[13px] font-medium tracking-wide text-zinc-400 hover:text-white hover:bg-white/[0.07] transition-colors duration-200"
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact">
              <Button variant="primary" size="sm" className="rounded-full px-6 h-9 text-[13px] font-semibold shadow-md">
                Let's Talk
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white backdrop-blur hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden absolute inset-x-0 top-full border-t border-white/[0.06] bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl"
          >
            <nav className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.name}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[14px] font-medium text-zinc-300 hover:bg-white/[0.06] hover:text-white transition-colors border border-transparent hover:border-white/[0.06]"
                >
                  {l.name}
                  <span className="text-zinc-600 text-xs">↗</span>
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4">
                <Button variant="primary" className="w-full rounded-xl h-11 text-[14px] font-semibold">
                  Get In Touch
                </Button>
              </a>
              <p className="text-center text-xs text-zinc-500 mt-3 font-mono tracking-wide">nlachgar12@gmail.com</p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
