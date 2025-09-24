"use client";
import { Marquee } from "@/components/magicui/marquee";

// Define interface for review/logo objects
interface Review {
  img: string;
}

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

interface ReviewCardProps {
  img: string;
}

// Simplified card for small logos
const ReviewCard = ({ img }: ReviewCardProps) => {
  return (
    <div className="flex items-center justify-center w-24 h-56 sm:w-56 sm:h-44 p-2">
      <img
        src={img}
        alt="logo"
        className="object-contain w-full h-full  transition-all duration-300"
      />
    </div>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative w-full py-12 overflow-hidden">
      {/* Top Marquee */}
      <Marquee
        pauseOnHover
        className="gap-8 sm:gap-12 relative z-10 [--duration:30s]"
      >
        {firstRow.map((review, idx) => (
          <ReviewCard key={idx} img={review.img} />
        ))}
      </Marquee>

      
    </div>
  );
}
