"use client";
import { useEffect, useState } from "react";
import { motion, easeOut } from "motion/react";
import ImageHome from "@/ui/home/ImageHome";

export default function ScrollImageHome() {
  const [scrollY, setScrollY] = useState(0);
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
  const handleScroll = () => setScrollY(window.scrollY);
  handleScroll(); // مقدار اولیه واقعی
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

if (!mounted) return null;

  const disappearAt = 570; // نقطه‌ای که تصویر حذف شود

  const isVisible = scrollY < disappearAt; // قبل از این نقطه تصویر ظاهر است

  // transform فقط وقتی visible است اعمال شود
  const translateY = isVisible ? scrollY * 0.3 : 0;
  const scale = isVisible ? Math.max(0.1, 1 - scrollY * 0.001) : 0;
  let rotate = 0;
  if (isVisible && scrollY > 300) {
    rotate = Math.min((scrollY - 300) * 0.05, 3);
  }

  return (
    <motion.div
      style={{
        position: "fixed",
        top: "21vh",
        left: "40vw",
        y: translateY,
        scale: scale,
        rotate: rotate,
        zIndex: 9999,
        originX: 0.5,
        originY: 0.5,
        pointerEvents: "none",
        display: isVisible ? "block" : "none", // این خط باعث حذف تصویر می‌شود
      }}
      transition={{ ease: easeOut }}
    >
      <ImageHome />
    </motion.div>
  );
}