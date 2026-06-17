import React from "react";
import { motion } from "motion/react";
// @ts-ignore
import sportsBarHeroImg from "../assets/images/sports_bar_hero_1781664121645.jpg";

interface HeroBackgroundProps {
  children?: React.ReactNode;
  heightClass?: string;
  className?: string;
}

export default function HeroBackground({ children, heightClass = "min-h-screen", className = "" }: HeroBackgroundProps) {
  return (
    <section className={`relative ${heightClass} w-full flex items-center justify-center overflow-hidden bg-[#080807] ${className}`}>
      {/* Background Image Wrapper with infinite premium cinematic zoom/drift */}
      <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
        <motion.div
          animate={{
            scale: [1.02, 1.08, 1.02],
            x: [-5, 5, -5],
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute inset-0 w-full h-full origin-center"
        >
          <img
            src={sportsBarHeroImg}
            alt="Chasers Sports Bar and Grill Premium Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Layer 1: Global Black Tint Overlay to boost contrast */}
      <div className="absolute inset-0 bg-black/65 z-[1] select-none pointer-events-none" />

      {/* Layer 2: Extreme High-End Cinematic Vignette Overlay */}
      <div 
        className="absolute inset-0 z-[2] select-none pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(8, 8, 7, 0.15) 0%, rgba(8, 8, 7, 0.75) 45%, rgba(8, 8, 7, 0.98) 85%, #080807 100%)",
        }}
      />

      {/* Layer 3: Subtle Orange/Amber Radial Glow behind content */}
      <div 
        className="absolute inset-0 z-[3] select-none pointer-events-none opacity-90"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(247, 198, 31, 0.12) 0%, rgba(240, 90, 36, 0.04) 35%, transparent 70%)",
        }}
      />

      {/* Layer 4: Linear fade at the bottom to transition into other page components */}
      <div 
        className="absolute inset-0 z-[4] select-none pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 65%, #080807 100%)",
        }}
      />

      {/* Subtle Grid Dot Accents */}
      <div 
        className="absolute inset-0 opacity-10 z-[5] select-none pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#f7c61f 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* Content wrapper */}
      <div className="w-full mx-auto relative z-[10] px-4 sm:px-8 py-12 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
