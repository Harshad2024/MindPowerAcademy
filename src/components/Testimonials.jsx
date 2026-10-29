import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Pramod Kalyan',
    initial: 'P',
    color: '#E53E3E',
    rating: 5,
    text: 'Handwriting improvement has been a game-changer for me. With the right techniques, my writing is now faster, more legible, and visually appealing. The course was incredibly well-structured and the trainer was very patient and supportive throughout.',
    time: '1 year ago',
  },
  {
    name: 'Pramod Kalyan',
    initial: 'P',
    color: '#E53E3E',
    rating: 5,
    text: 'Pendulum dowsing is a fascinating and effective practice! It helps me connect with my intuition and make better decisions. The simplicity of using a pendulum as a tool for guidance and clarity is truly remarkable.',
    time: '1 year ago',
  },
  {
    name: 'Tanveer',
    initial: 'T',
    color: '#38A169',
    rating: 5,
    text: 'Super class! I like it. The teaching style is very engaging and the content is practical. Highly recommend Mind Power Academy to anyone looking to transform their life.',
    time: '2 years ago',
  },
  {
    name: 'Rohini Hombal',
    initial: 'R',
    color: '#DD6B20',
    rating: 4,
    text: 'I had a wonderful experience with the handwriting improvement course! The techniques taught were simple yet highly effective. In just a few weeks, my handwriting transformed significantly.',
    time: '3 years ago',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <FiStar
          key={i}
          size={14}
          className={i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          fill={i < count ? '#FACC15' : 'none'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const visible = [
    testimonials[active % testimonials.length],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Check what <span className="text-navy">People</span> say about us
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {visible.map((t, i) => (
            <motion.div
              key={i + active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.time}</p>
                  </div>
                </div>
                {/* Google G */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <Stars count={t.rating} />
              <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-4">{t.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all"
            aria-label="Previous"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all"
            aria-label="Next"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
