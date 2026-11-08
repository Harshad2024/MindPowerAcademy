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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 sm:px-4 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 font-semibold text-[11px] sm:text-xs tracking-wide sm:tracking-wider uppercase mb-4 max-w-full">
            Personality Development &amp; Handwriting Improvement
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="block text-white mb-2">Unlock Your True Potential with</span>
            <span className="block text-primary drop-shadow-md">Mind Power Academy</span>
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-xl leading-relaxed">
            Discover transformative courses designed to enhance your handwriting, boost your confidence, sharpen your memory, and empower you for lifelong success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/contact-us/"
              className="btn-primary text-sm sm:text-base px-8 py-3.5 shadow-lg hover:shadow-blue-500/30 uppercase tracking-wider text-center"
            >
              Contact Us
            </Link>
            <Link
              to="/courses/"
              className="btn-outline text-sm sm:text-base px-8 py-3.5 text-white border-white hover:bg-white hover:text-gray-900 uppercase tracking-wider text-center"
            >
              Courses
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Bottom subtle curve decoration */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-[2]">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
          <path d="M0 48H1440V15C1080 48 360 0 0 30V48Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
