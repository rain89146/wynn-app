"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function LayoutTransition({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
        <motion.div
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    </AnimatePresence>
  );
}