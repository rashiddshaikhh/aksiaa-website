"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroLogo() {
  return (
    <motion.div
      className="mx-auto w-full max-w-xs"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Image
        src="/images/logo-mask-bg.png"
        alt="Aksiaa Technologies"
        width={520}
        height={520}
        className="w-full"
        priority
      />
    </motion.div>
  );
}
