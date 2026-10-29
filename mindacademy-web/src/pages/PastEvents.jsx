import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiZoomIn,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiArrowRight,
  FiPhone,
} from 'react-icons/fi';
import { FaWhatsapp, FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GALLERY_PHOTOS = [
  {
    id: 1,
    src: '/gallary/photo1.png',
    title: 'Interactive Community Seminar',
    category: 'Seminars',
    location: 'Hubballi, Karnataka',
    desc: 'Umesh S. Phiragi addressing village leaders and parents on child mindset training and handwriting importance.',
  },
  {
    id: 2,
    src: '/gallary/photo2.png',
    title: 'Grand Auditorium Student Session',
    category: 'Workshops',
    location: 'Town Hall Auditorium',
    desc: 'Over 400+ school and college students gathered for a high-energy memory power and focus workshop.',
  },
  {
    id: 3,
    src: '/gallary/photo3.png',
    title: 'Personalized Handwriting Mentorship',
    category: 'Classroom',
    location: 'Mind Power Academy Center',
    desc: 'Intensive small-group mentoring focusing on stroke angle, grip ergonomics, and writing clarity.',
  },
  {
    id: 4,
    src: '/gallary/photo4.png',
    title: 'Student Public Speaking & Stage Fear Removal',
    category: 'Classroom',
    location: 'Vidyanagar Classroom',
    desc: 'Encouraging young learners to speak fluently and overcome hesitation in front of peers.',
  },
  {
    id: 5,
    src: '/gallary/photo5.png',
    title: 'Empowered Student Batch Celebration',
    category: 'Workshops',
    location: 'Hubballi Academy Campus',
    desc: 'Smiling students proudly celebrating notable transformation in handwriting speed and confidence.',
  },
  {
    id: 6,
    src: '/gallary/photo6.png',
    title: 'Institutional Teacher & Parent Workshop',
    category: 'Seminars',
    location: 'School Seminar Hall',
    desc: 'Capacity-building orientation for teachers on graphology insights and student psychology.',
  },
  {
    id: 7,
    src: '/gallary/photo7.png',
    title: 'Graphology & Handwriting Analysis Demo',
    category: 'Workshops',
    location: 'Training Hall',
    desc: 'Live scientific handwriting assessment demonstrating character traits and emotional states.',
  },
  {
    id: 8,
    src: '/gallary/photo8.png',
    title: 'Master Trainer Umesh S. Phiragi Lecture',
    category: 'Seminars',
    location: 'Hubballi Center',
    desc: 'Guiding parents on how to nurture study motivation, discipline, and emotional balance.',
  },
  {
    id: 9,
    src: '/gallary/photo9.png',
    title: 'Focus & Concentration Techniques Session',
    category: 'Classroom',
    location: 'Workshop Hall',
    desc: 'Guided visualization and cognitive drills to enhance attention span and memory retention.',
  },
  {
    id: 10,
    src: '/gallary/photo10.png',
    title: 'Interactive Penmanship Drill',
    category: 'Classroom',
    location: 'Vidyanagar Academy',
    desc: 'Students actively applying speed-writing methods under live supervision.',
  },
  {
    id: 11,
    src: '/gallary/photo11.png',
    title: 'Pendulum Dowsing & Energy Healing',
    category: 'Workshops',
    location: 'Specialized Workshop Batch',
    desc: 'Practical demonstration of subconscious pendulum bio-feedback and energy balancing.',
  },
  {
    id: 12,
    src: '/gallary/photo12.png',
    title: 'Comprehensive Classroom Group Activity',
    category: 'Classroom',
    location: 'Mind Power Academy Hubballi',
    desc: 'Students engaging in team memory challenges and collaborative learning exercises.',
  },
];

const CATEGORIES = ['All Photos', 'Workshops', 'Seminars', 'Classroom'];

export default function PastEvents() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All Photos');

  // Filter photos based on tab
  const filteredPhotos =
    activeCategory === 'All Photos'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev + 1) % filteredPhotos.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIdx(
          (prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, filteredPhotos.length]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* ──────────────────────────────────────────────
          1. Hero Banner: Authentic Original Fountain Pen Background
      ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28 text-white">
        {/* Background Image with Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/page-banner.jpg"
            alt="Mind Power Academy Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#034ea2]/90 via-[#046bd2]/85 to-[#0b2560]/90" />
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm shadow-sm">
            Event Highlights & Impact
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider drop-shadow-md">
            OUR SUCCESSFUL EVENTS
          </h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Witness the inspiring moments, dynamic seminars, and remarkable transformations from our academy.
          </p>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-sm text-blue-200">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Past Events & Gallery</span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. Gallery Section with Filter Tabs
      ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Gallery
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-base md:text-lg">
            Glimpses of real interactive workshops, school seminars, handwriting coaching, and student achievements.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIdx(null);
                }}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Grid - 12 authentic photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col justify-between transition-all duration-300"
            >
              {/* Photo Image with Hover Zoom & Overlay */}
              <div
                className="relative overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer"
                onClick={() => setSelectedIdx(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />

                {/* Category Pill on Image */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 rounded-full bg-blue-900/80 backdrop-blur-sm text-white text-xs font-bold tracking-wide shadow-sm">
                    {photo.category}
                  </span>
                </div>

                {/* Hover Dark Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-blue-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center text-xl shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <FiZoomIn />
                  </div>
                </div>
              </div>

              {/* Photo Details */}
              <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 flex items-center gap-1.5 font-medium">
                    <FiMapPin className="text-primary" />
                    <span>{photo.location}</span>
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm mt-2.5 leading-relaxed">
                    {photo.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">
                    Mind Power Academy Archive
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedIdx(index)}
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Enlarge</span>
                    <FiZoomIn />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. Quick Stats & Community Reach
      ────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                15,000+
              </div>
              <p className="text-gray-600 font-semibold text-sm">Students Trained</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                500+
              </div>
              <p className="text-gray-600 font-semibold text-sm">Workshops Conducted</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                20+
              </div>
              <p className="text-gray-600 font-semibold text-sm">Years of Experience</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                100%
              </div>
              <p className="text-gray-600 font-semibold text-sm">Commitment to Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. Bottom Call to Action
      ────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
              Join Our Next Batch
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ready to experience this transformation yourself?
            </h2>
            <p className="text-blue-100 mt-3 text-sm md:text-base">
              Explore our upcoming events or contact our mentors to schedule an individualized orientation session.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/upcoming-events/"
              className="px-6 py-3.5 rounded-full font-bold text-sm bg-white text-blue-800 hover:bg-blue-50 shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <FiCalendar className="text-base" />
              <span>Upcoming Workshops</span>
            </Link>
            <a
              href="https://wa.me/919844856288?text=Hello!%20I%20am%20interested%20in%20Mind%20Power%20Academy%20workshops."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <FaWhatsapp className="text-base" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          5. Full-Screen Interactive Lightbox
      ────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Top Bar: Counter & Close */}
            <div className="absolute top-5 inset-x-5 md:inset-x-8 flex items-center justify-between text-white z-50">
              <div className="bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm text-xs font-bold tracking-wider">
                Photo {selectedIdx + 1} of {filteredPhotos.length}
              </div>

              <button
                type="button"
                onClick={() => setSelectedIdx(null)}
                className="text-white text-3xl p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                aria-label="Close"
              >
                <FiX />
              </button>
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx(
                  (prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length
                );
              }}
              className="absolute left-4 md:left-8 text-white text-2xl md:text-3xl p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all z-40"
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev + 1) % filteredPhotos.length);
              }}
              className="absolute right-4 md:right-8 text-white text-2xl md:text-3xl p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all z-40"
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>

            {/* Active Image Card */}
            <motion.div
              key={filteredPhotos[selectedIdx].id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[selectedIdx].src}
                alt={filteredPhotos[selectedIdx].title}
                className="max-h-[72vh] w-auto rounded-2xl shadow-2xl object-contain border border-white/15"
              />

              <div className="mt-4 text-center text-white max-w-2xl px-4">
                <h4 className="text-lg md:text-xl font-bold">
                  {filteredPhotos[selectedIdx].title}
                </h4>
                <p className="text-gray-300 text-xs md:text-sm mt-1">
                  {filteredPhotos[selectedIdx].desc}
                </p>
                <p className="text-primary text-xs mt-1 font-semibold">
                  📍 {filteredPhotos[selectedIdx].location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
