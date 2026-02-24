"use client";
import { motion } from "motion/react";
import Image from "next/image"
import ImageHomePhoto from '../../../public/images/coffe-livan-orginal.webp';

const MotionDiv = motion.div;

function ImageHome() {
  return (
    <div>
      <Image alt="" src={ImageHomePhoto} className="w-[370px] h-[550px] image-home-box"/>

      <MotionDiv
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 1.8, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-white blur-xl pointer-events-none"
      />

      {/* Glow Ring */}
      <MotionDiv
        initial={{ scale: 0.2, opacity: 1 }}
        animate={{ scale: 4, opacity: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 m-auto w-52 h-52 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 10%, rgba(255,255,255,0.8) 35%, rgba(255,255,255,0.4) 60%, transparent 85%)",
          filter: "blur(35px)"
        }}
      />


    </div>
  )
}

export default ImageHome