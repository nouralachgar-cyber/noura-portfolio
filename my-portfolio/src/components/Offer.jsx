import { motion } from "framer-motion"
import { Layout, Smartphone, Sparkles, Monitor, Palette, Zap } from "lucide-react"

const offers = [
  { icon: Layout, title: "Clean & Organized Structure", desc: "Semantic HTML that is easy to maintain, scale and love.", num: "01" },
  { icon: Smartphone, title: "Responsive Layouts", desc: "Fluid designs that adapt seamlessly to laptops, tablets & phones.", num: "02" },
  { icon: Palette, title: "User-Friendly Interfaces", desc: "Visually appealing, intuitive designs centered on user experience.", num: "03" },
  { icon: Sparkles, title: "Interactive Elements", desc: "Delightful animations and features with JavaScript & React.", num: "04" },
  { icon: Monitor, title: "Cross-Device Compatibility", desc: "Perfect look & function across all modern browsers.", num: "05" },
  { icon: Zap, title: "Simple & Effective UX", desc: "Fast-loading, straightforward and engaging digital experiences.", num: "06" },
]

export default function Offer() {
  return (
    <section id="offer" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#58111A]/15 via-transparent to-rose-500/10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-rose-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#58111A]/20 border border-[#58111A]/30 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-rose-200">
            <Sparkles className="h-3.5 w-3.5" /> What I Offer
          </div>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold tracking-tight text-white">
            I craft <span className="bg-gradient-to-r from-rose-300 to-amber-200 bg-clip-text text-transparent">modern</span> & responsive
          </h2>
          <p className="mt-4 text-zinc-400">With focus on clean aesthetics, performance, and the dev-girl attention to detail — every build feels premium.</p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative rounded-[1.5rem] bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur border border-white/[0.06] p-7 hover:from-white/[0.08] hover:border-rose-900/30 hover:shadow-xl hover:shadow-rose-900/10 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition">
                <span className="font-display text-6xl font-bold text-white">{item.num}</span>
              </div>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition">
                    <item.icon className="h-5 w-5 text-[#58111A]" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-rose-300">{item.num}</span>
                </div>
                <h3 className="mt-5 font-display font-semibold text-white text-[17px] leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

