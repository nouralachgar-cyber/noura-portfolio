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
    <section id="offer" className="relative py-20 lg:py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#58111A]/10 via-transparent to-rose-500/[0.05] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-rose-500/[0.04] blur-3xl rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#58111A]/15 border border-[#58111A]/20 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-[#e89ca8]">
            <Sparkles className="h-3.5 w-3.5" /> What I Offer
          </div>
          <h2 className="mt-5 font-display text-[32px] lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.05] text-white">
            I craft <span className="bg-gradient-to-r from-[#e89ca8] to-amber-200 bg-clip-text text-transparent">modern</span> & responsive
          </h2>
          <p className="mt-4 text-[14px] leading-6 text-zinc-400">With focus on clean aesthetics, performance, and the dev-girl attention to detail — every build feels premium.</p>
        </motion.div>

        <div className="mt-10 lg:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {offers.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="group relative rounded-[1.5rem] bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur border border-white/[0.06] p-6 lg:p-7 hover:from-white/[0.07] hover:border-[#58111A]/20 hover:shadow-[0_12px_32px_rgba(88,17,26,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity">
                <span className="font-display text-6xl font-bold tracking-tighter text-white">{item.num}</span>
              </div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#FFFFF0] flex items-center justify-center shadow-sm border border-zinc-200 group-hover:scale-105 transition-transform duration-300">
                    <item.icon className="h-5 w-5 text-[#58111A] shrink-0" />
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-[#e89ca8] font-medium">{item.num}</span>
                </div>
                <h3 className="mt-5 font-display font-semibold text-white text-[16px] leading-tight tracking-tight">{item.title}</h3>
                <p className="mt-2 text-[13.5px] leading-6 text-zinc-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
