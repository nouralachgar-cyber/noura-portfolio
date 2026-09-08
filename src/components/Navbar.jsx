import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#offer" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.08] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#58111A] to-rose-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-rose-900/20 group-hover:shadow-rose-900/30 transition">
            N
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Noura<span className="text-rose-400">.</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 ml-2 rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-1 text-[10px] font-medium tracking-widest uppercase text-zinc-300">
            <Sparkles className="h-3 w-3 text-rose-300" /> Dev Girl
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.04] backdrop-blur border border-white/[0.06] p-1">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition"
            >
              {l.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact">
            <Button variant="primary" size="sm" className="rounded-full">
              Let's Talk
            </Button>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl bg-white/10 border border-white/10 text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 p-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:bg-white/10 hover:text-white transition"
              >
                {l.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-3">
              <Button variant="primary" className="w-full rounded-xl">
                Get In Touch
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
