import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ergi Laura',
    position: 'VP of Network Services',
    company: 'Principal',
    content:
      'We consider Akita as our off site IT department and find you and your colleagues always happy to assist with our questions. Fantastic IT support for all business large.',
    avatar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'TechCorp',
    content:
      'Outstanding service and expertise. The team consistently delivers high-quality solutions that exceed our expectations. Their proactive approach has been invaluable to our growth.',
    avatar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'IT Director',
    company: 'Innovation Labs',
    content:
      'Professional, reliable, and always available when we need them. The level of technical expertise and customer service is truly exceptional. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
  },
  {
    id: 4,
    name: 'Lisa Rodriguez',
    position: 'Operations Manager',
    company: 'Global Solutions',
    content:
      'The team has transformed our IT infrastructure and processes. Their strategic guidance and hands-on support have been instrumental in our digital transformation journey.',
    avatar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    if (!isTransitioning && !isDragging) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevTestimonial = () => {
    if (!isTransitioning && !isDragging) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const goToTestimonial = (index: number) => {
    if (!isTransitioning && !isDragging && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  // Touch & Mouse events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    stopAutoplay();
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      const threshold = 50;
      if (Math.abs(diff) > threshold) {
        diff > 0 ? nextTestimonial() : prevTestimonial();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(startAutoplay, 100);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    stopAutoplay();
    touchStartX.current = e.clientX;
    touchEndX.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      const threshold = 50;
      if (Math.abs(diff) > threshold) {
        diff > 0 ? nextTestimonial() : prevTestimonial();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(startAutoplay, 100);
  };

  const startAutoplay = () => {
    if (isDragging) return;
    stopAutoplay();
    autoplayRef.current = setInterval(nextTestimonial, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50"
      style={{
        backgroundImage: "url(/images/bg-section-blog.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isDragging ? 'cursor-grab' : 'cursor-default'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ touchAction: 'pan-y', userSelect: 'none' }}
      >
        {/* Testimonial Content */}
        <div className="flex-1 text-center md:text-left transition-all duration-500 ease-in-out"
             style={{
               opacity: isTransitioning ? 0.5 : 1,
               transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
             }}
        >
          <div className="flex justify-center md:justify-start mb-4">
            <Quote className="w-10 h-10 text-blue-500" strokeWidth={2} />
          </div>
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 mb-6">
            "{currentTestimonial.content}"
          </blockquote>
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            {currentTestimonial.name}
          </h4>
          <p className="text-blue-600 font-medium">
            ({currentTestimonial.position}, {currentTestimonial.company})
          </p>
        </div>

        {/* Avatar Dots / Navigation */}
        <div className="flex flex-row md:flex-col items-center gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative flex items-center justify-center">
              {index === currentIndex ? (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => goToTestimonial(index)}
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition-all duration-300"
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
