import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const SLIDES = [
  '/images/hero-slide-1.jpg',
  '/images/hero-slide-2.jpg',
  '/images/hero-slide-3.jpg',
  '/images/hero-slide-4.jpg',
];

const SLIDE_DURATION = 3000; // 3s per slide (matching original WP)
const TRANSITION_DURATION = 1; // 1s fade transition

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden"
    >
      {/* Background Slideshow with Ken Burns effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: TRANSITION_DURATION, ease: 'easeInOut' },
            scale: { duration: SLIDE_DURATION / 1000 + TRANSITION_DURATION, ease: 'linear' },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={SLIDES[currentSlide]}
            alt=""
            className="w-full h-full object-cover"
            loading={currentSlide === 0 ? 'eager' : 'lazy'}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 sm:px-4 rounded-full bg-blue-500/25 border border-blue-400/50 text-blue-200 font-semibold text-[11px] sm:text-xs tracking-wide sm:tracking-wider uppercase mb-4 max-w-full">
            Personality Development &amp; Handwriting Improvement
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            <span className="block text-white mb-2">Unlock Your True Potential with</span>
            <span className="block text-blue-400 drop-shadow-md">Mind Power Academy</span>
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-7 sm:mb-9 max-w-xl leading-relaxed">
            Discover transformative courses designed to enhance your handwriting, boost your confidence, sharpen your memory, and empower you for lifelong success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xs sm:max-w-md">
            <Link
              to="/contact-us/"
              className="px-7 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-center text-white bg-primary hover:bg-blue-700 shadow-md transition-all"
            >
              Contact Us
            </Link>
            <Link
              to="/courses/"
              className="px-7 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-center text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all"
            >
              Courses
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110 shadow-sm'
                : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
