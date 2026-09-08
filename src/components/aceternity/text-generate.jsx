import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function TextGenerateEffect({ words, className, filter = true, duration = 0.5 }) {
  const wordsArray = words.split(" ")
  return (
    <div className={cn("font-bold", className)}>
      <div className="leading-snug tracking-tight">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
            animate={{ opacity: 1, filter: filter ? "blur(0px)" : "none" }}
            transition={{ duration, delay: idx * 0.08 }}
            className="inline-block mr-[0.25em] text-white"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

