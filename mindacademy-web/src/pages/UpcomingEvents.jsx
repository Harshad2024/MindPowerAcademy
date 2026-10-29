import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCalendar,
  FiMapPin,
  FiPhone,
  FiCheckCircle,
  FiZoomIn,
  FiX,
  FiArrowRight,
  FiDownload,
  FiShare2,
} from 'react-icons/fi';
import { FaWhatsapp, FaUserTie, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UPCOMING_POSTERS = [
  {
    id: 'poster1',
    image: '/upcoming-events/Poster1.png',
    title: 'Mind Power Academy - Comprehensive Workshop',
    subtitle: 'Specialized Offline & Online Batches in Hubballi',
    trainer: 'Umesh S. Phiragi',
    trainerRole: 'Master Trainer & Mind Power Expert',
    badge: 'Popular Workshop',
    badgeColor: 'bg-amber-500',
    description:
      'A holistic, life-transforming workshop covering handwriting transformation across Kannada, English & Hindi, dynamic personality grooming, speed memory systems, and subconscious mind reprogramming.',
    highlights: [
      'Handwriting Improvement (Kannada, English & Hindi)',
      'Personality Development & Overcoming Stage Fear',
      'Memory Skills & Exam Retention Techniques',
      'Graphology (Scientific Handwriting Analysis)',
      'Self Hypnosis & Subconscious Mind Power',
      'Pendulum Dowsing for Decision Making',
    ],
    venue: 'Mind Power Academy, Near ABMM Hostel, Lokappana Hakkala, Vidyanagar, Hubballi',
    contact: '+91 98448 56288',
    whatsappMessage:
      'Hello! I would like to register for the Mind Power Academy Comprehensive Workshop.',
  },
  {
    id: 'poster2',
    image: '/upcoming-events/Poster2.png',
    title: 'English Grammar Classes (Basic & Advance)',
    subtitle: 'Comprehensive Language Mastery for Students & Adults',
    trainer: 'Senior English Language Faculty',
    trainerRole: 'Grammar & Spoken English Specialist',
    badge: 'Admission Open',
    badgeColor: 'bg-emerald-600',
    description:
      'Transform your command of English with our dedicated Basic & Advance grammar training. Perfect for school students, college attendees, and professionals aiming for impeccable writing and spoken fluency.',
    highlights: [
      'Fundamental to Advanced Grammar Rules & Structures',
      'Tenses, Active-Passive Voice & Direct-Indirect Speech',
      'Vocabulary Expansion & Error-Free Sentence Construction',
      'Spoken English & Daily Conversation Drills',
      'School Syllabus Support & Exam Writing Practice',
      'Personal Attention & Regular Assessments',
    ],
    venue: 'Lokappana Hakkala, Vidyanagar, Near ABMM Hostel & Ganesh Temple, Hubballi',
    contact: '+91 98448 56288 / +91 94827 79529',
    whatsappMessage:
      'Hello! I would like to inquire and register for the English Grammar Classes (Basic & Advance).',
  },
];

const WORKSHOP_BENEFITS = [
  {
    icon: FaUserTie,
    title: 'Expert Mentorship',
    desc: 'Direct coaching from Umesh S. Phiragi with 20+ years of proven expertise.',
  },
  {
    icon: FiCheckCircle,
    title: '100% Practical Drills',
    desc: 'Action-oriented exercises, individual handwriting corrections, and live practice.',
  },
  {
    icon: FaGraduationCap,
    title: 'Recognized Certificate',
    desc: 'Receive official Mind Power Academy certification upon successful course completion.',
  },
  {
    icon: FiPhone,
    title: 'Continuous Support',
    desc: 'Post-workshop guidance, review sessions, and access to trainer consultations.',
  },
];

export default function UpcomingEvents() {
  const [activeImage, setActiveImage] = useState(null);

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

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm shadow-sm">
            Workshops & Seminars
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider drop-shadow-md">
            UPCOMING EVENTS
          </h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Reserve your seat for our transformative upcoming batches and empowering workshops in Hubballi.
          </p>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-sm text-blue-200">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Upcoming Events</span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. Events Showcase Section
      ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Upcoming <span className="text-primary">Batches & Workshops</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-base md:text-lg">
            Click on any poster to view details in high resolution, or connect with our team to enroll immediately.
          </p>
        </div>

        {/* Posters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {UPCOMING_POSTERS.map((poster, index) => (
            <motion.div
              key={poster.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Poster Image Container */}
              <div className="relative overflow-hidden bg-slate-900 group">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-auto object-contain max-h-[550px] transition-transform duration-500 group-hover:scale-102 cursor-pointer"
                  onClick={() => setActiveImage(poster.image)}
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`${poster.badgeColor} text-white font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md`}
                  >
                    {poster.badge}
                  </span>
                </div>

                {/* Quick Zoom Overlay on Hover */}
                <div
                  onClick={() => setActiveImage(poster.image)}
                  className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                >
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-bold text-sm flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                  >
                    <FiZoomIn className="text-primary text-lg" />
                    <span>View Full Size Poster</span>
                  </button>
                </div>
              </div>

              {/* Poster Description & Action Details */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {poster.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm mt-1">
                    {poster.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {poster.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-3">
                      Key Topics & Focus Areas
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                      {poster.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FiCheckCircle className="text-emerald-500 shrink-0 mt-0.5 text-base" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Location & Contact Details */}
                  <div className="mt-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2 text-sm">
                    <div className="flex items-start gap-2.5 text-gray-700">
                      <FiMapPin className="text-primary shrink-0 mt-1" />
                      <span>{poster.venue}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-gray-700 font-semibold">
                      <FiPhone className="text-primary shrink-0" />
                      <span>Helpline: {poster.contact}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Buttons */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/919844856288?text=${encodeURIComponent(
                      poster.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-5 rounded-full font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Register on WhatsApp</span>
                  </a>

                  <Link
                    to="/contact-us/"
                    className="py-3 px-6 rounded-full font-bold text-sm bg-primary hover:bg-blue-700 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Enquire Now</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. Why Attend Section
      ────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Experience Excellence
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              Why Attend Our Workshops?
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Every workshop is crafted to deliver immediate, measurable improvements with lifetime value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKSHOP_BENEFITS.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl mb-4 shadow-md">
                  <b.icon />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. Quick Call-To-Action Banner
      ────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
              Need a Custom Workshop?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Looking to organize a workshop at your school, college, or company?
            </h2>
            <p className="text-blue-100 mt-3 text-sm md:text-base">
              We conduct institutional seminars on handwriting, memory training, and motivation across Karnataka.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:+919844856288"
              className="px-6 py-3.5 rounded-full font-bold text-sm bg-white text-blue-800 hover:bg-blue-50 shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <FiPhone className="text-base" />
              <span>Call +91 98448 56288</span>
            </a>
            <Link
              to="/contact-us/"
              className="px-6 py-3.5 rounded-full font-bold text-sm bg-blue-900/60 hover:bg-blue-950 border border-white/30 text-white shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>Contact Us</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          5. Full-Screen Image Lightbox Modal
      ────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveImage(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white text-3xl p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50"
              aria-label="Close"
            >
              <FiX />
            </button>

            {/* Poster in Lightbox */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Enlarged Event Poster"
                className="max-h-[80vh] w-auto rounded-2xl shadow-2xl object-contain border border-white/10"
              />

              <div className="mt-4 flex gap-4">
                <a
                  href={activeImage}
                  download="MindPowerAcademy-EventPoster.png"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <FiDownload />
                  <span>Download Poster</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="px-5 py-2.5 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/30 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
