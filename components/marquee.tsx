"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";

// Define interface for review objects
interface Review {
  img: string;
}

// Define reviews array with TypeScript typing
const reviews: Review[] = [
  { img: "/images/1.png" },
  { img: "/images/2.png" },
  { img: "/images/4.png" },
  { img: "/images/5.png" },
  { img: "/images/6.png" },
  { img: "/images/9.png" },
  { img: "/images/SMART TAX !DEA.png" },
  { img: "/images/jkk.png" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// Define props for ReviewCard component
interface ReviewCardProps {
  img: string;
}

const ReviewCard = ({ img }: ReviewCardProps) => {
  return (
    <motion.figure
      className={cn(
        "relative flex h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-52 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border transition-all duration-500",
        // Glassmorphism styles with blue-based colors
        "border-white/20 bg-gradient-to-br from-white/15 via-white/8 to-white/5 backdrop-blur-2xl",
        // Dark mode
        "dark:border-white/10 dark:from-white/10 dark:via-white/5 dark:to-white/2",
        // Hover effects
        "hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:shadow-blue-500/20",
        "hover:border-white/30 hover:bg-gradient-to-br hover:from-white/20 hover:via-white/10 hover:to-white/8",
        // Glow effect
        "relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-r before:from-blue-500/30 before:to-blue-700/30 before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100 before:blur-md",
        // Inner glow
        "after:absolute after:inset-[1px] after:-z-5 after:rounded-2xl after:bg-gradient-to-br after:from-blue-500/10 after:to-blue-700/10 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100",
        // Transform preparation
        "transform-gpu"
      )}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.12,
        rotate: 3,
        rotateY: 8,
        transition: { duration: 0.3, type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Image with filters */}
      <motion.img
        className="h-full w-full object-contain transition-all duration-700 filter hover:brightness-110 hover:contrast-105"
        alt="review"
        src={img}
        whileHover={{
          scale: 1.15,
          filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5 opacity-50 hover:opacity-20 transition-opacity duration-500" />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 -translate-x-full hover:translate-x-full transition-all duration-1000"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
      />

      {/* Corner accent dots */}
      <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-blue-500/60 opacity-0 hover:opacity-100 transition-all duration-500 animate-pulse" />
      <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-blue-500/60 opacity-0 hover:opacity-100 transition-all duration-700 animate-pulse" />
    </motion.figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20 bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-20">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-500/10 to-white opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-blue-500/20 opacity-70" />

        {/* Radial Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent opacity-80 blur-3xl animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent opacity-70 blur-3xl" />

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-8 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url(data:image/svg+xml,%3Csvg%20viewBox='0%200%20256%20256'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter%20id='noiseFilter'%3E%3CfeTurbulence%20type='fractalNoise'%20baseFrequency='0.9'%20numOctaves='4'%20stitchTiles='stitch'/%3E%3C/filter%3E%3Crect%20width='100%25'%20height='100%25'%20filter='url(%23noiseFilter)'%20opacity='0.03'/%3E%3C/svg%3E)] opacity-20 mix-blend-soft-light" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-blue-500/60 to-blue-700/40 animate-particle-float shadow-lg shadow-blue-500/50" style={{ top: "20%", left: "30%" }} />
          <div className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-blue-500/60 to-blue-700/40 animate-particle-float-delayed shadow-lg shadow-blue-500/50" style={{ top: "50%", left: "60%" }} />
          <div className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-blue-500/60 to-blue-700/40 animate-particle-float shadow-lg shadow-blue-500/50" style={{ top: "70%", left: "10%" }} />
          <div className="absolute h-2 w-2 rounded-full bg-blue-500/30 animate-float-slow blur-sm" style={{ top: "15%", left: "80%" }} />
          <div className="absolute h-1.5 w-1.5 rounded-full bg-blue-500/40 animate-float-medium blur-sm" style={{ top: "60%", left: "20%" }} />
          <div className="absolute h-2 w-2 rounded-full bg-blue-500/25 animate-float-fast blur-sm" style={{ top: "80%", left: "70%" }} />
          <div className="absolute h-1 w-1 rounded-full bg-blue-500/50 animate-particle-float" style={{ top: "30%", left: "90%" }} />
          <div className="absolute h-1.5 w-1.5 rounded-full bg-blue-500/35 animate-float-slow" style={{ top: "85%", left: "25%" }} />
        </div>

        {/* Gradient meshes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 animate-gradient-x" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/8 to-transparent animate-gradient-y" />
        </div>
      </div>

      {/* Heading */}
      <motion.div className="relative mb-12 text-center">
        {/* Heading background glow */}
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/40 to-blue-700/40 opacity-50 animate-pulse-slow scale-150" />

        <motion.h1
          className="relative text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 z-10 drop-shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
          }}
        >
          Our Trusted Partners
          {/* Animated underline */}
          <motion.div
            className="absolute -bottom-2 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg shadow-blue-500/50"
            initial={{ width: 0, x: "-50%" }}
            animate={{ width: "70%", x: "-50%" }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-black font-medium text-sm tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Excellence in Partnership
        </motion.p>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Fade gradients */}
        <div className="absolute left-0 top-0 z-20 h-full w-24 sm:w-32 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-20 h-full w-24 sm:w-32 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none" />

        {/* Marquee Rows */}
        <Marquee
          pauseOnHover
          className="[--duration:30s] gap-8 sm:gap-12 perspective-1000 relative z-10"
        >
          {firstRow.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ rotateX: 15, opacity: 0.8, y: 30 }}
              animate={{ rotateX: 0, opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 100,
              }}
            >
              <ReviewCard img={review.img} />
            </motion.div>
          ))}
        </Marquee>

        <Marquee
          reverse
          pauseOnHover
          className="[--duration:30s] gap-8 sm:gap-12 mt-8 perspective-1000 relative z-10"
        >
          {secondRow.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ rotateX: -15, opacity: 0.8, y: -30 }}
              animate={{ rotateX: 0, opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 100,
              }}
            >
              <ReviewCard img={review.img} />
            </motion.div>
          ))}
        </Marquee>
      </div>

      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-blue-500/20 via-blue-500/10 to-transparent blur-3xl opacity-60 animate-pulse-slower" />
    </div>
  );
}