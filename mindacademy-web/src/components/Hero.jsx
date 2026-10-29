import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat bg-slate-900"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 font-semibold text-xs tracking-wider uppercase mb-4">
            Personality Development & Handwriting Improvement
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2">
            Unlock Your True Potential with
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6 drop-shadow-md">
            Mind Power Academy
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Discover transformative courses designed to enhance your handwriting, boost your confidence, sharpen your memory, and empower you for lifelong success.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact-us/"
              className="btn-primary text-base px-8 py-3.5 shadow-lg hover:shadow-blue-500/30 uppercase tracking-wider"
            >
              Contact Us
            </Link>
            <Link
              to="/courses/"
              className="btn-outline text-base px-8 py-3.5 text-white border-white hover:bg-white hover:text-gray-900 uppercase tracking-wider"
            >
              Courses
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom subtle curve decoration */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
          <path d="M0 48H1440V15C1080 48 360 0 0 30V48Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
