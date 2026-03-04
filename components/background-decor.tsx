"use client"

import { motion } from "framer-motion"

export function BackgroundDecor() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* soft grid */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(60% 60% at 50% 30%, black 0%, transparent 75%)",
        }}
      />

      {/* glow orbs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,88,88,0.34), transparent 60%)" }}
        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-10 -right-48 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at 40% 40%, rgba(99,102,241,0.26), transparent 62%)" }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-56 left-1/3 h-[620px] w-[620px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.18), transparent 62%)" }}
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
