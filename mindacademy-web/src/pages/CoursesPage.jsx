import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCheck, FiArrowRight, FiBookOpen } from 'react-icons/fi';
import ImagePlaceholder from '../components/common/ImagePlaceholder';

const COURSES = [
  {
    id: 'handwriting',
    title: 'Handwriting Improvement Course',
    tagline: 'Transform Your Handwriting, Transform Your Life!',
    desc: 'Unlock the secrets to writing with speed, elegance, and clarity. Master the art of beautiful handwriting whether for school exams, competitive tests, or professional communication.',
    types: ['Simple Handwriting', 'Cursive Handwriting', 'Running Handwriting'],
    duration: '15-20 Days (Flexible Batches)',
    imageTitle: 'Handwriting Improvement Course Cover',
  },
  {
    id: 'personality',
    title: 'Personality Development',
    tagline: 'Build Confidence, Speak with Impact',
    desc: 'Cultivate commanding body language, stage confidence, positive mindset, and effective communication skills to shine in interviews, school presentations, and public forums.',
    types: ['Public Speaking', 'Body Language & Etiquette', 'Overcoming Stage Fear'],
    duration: '4-6 Weeks',
    imageTitle: 'Personality Development Cover',
  },
  {
    id: 'calligraphy',
    title: 'Calligraphy Masterclass',
    tagline: 'The Art of Beautiful Lettering',
    desc: 'Learn artistic lettering styles, stroke control, rhythm, and decorative fonts with specialized calligraphy nibs and markers for creative expressions and cards.',
    types: ['Basic Strokes & Drills', 'Foundational Hand', 'Gothic & Modern Calligraphy'],
    duration: '10-15 Days',
    imageTitle: 'Calligraphy Masterclass Cover',
  },
  {
    id: 'memory-skills',
    title: 'Memory Skills & Brain Power',
    tagline: 'Remember Faster, Retain Longer',
    desc: 'Mnemonic systems, mind mapping, speed reading, and cognitive exercises engineered to help students ace exams without stress and recall key information effortlessly.',
    types: ['Mnemonic Techniques', 'Mind Mapping & Visual Memory', 'Exam Recall Strategies'],
    duration: '2 Weeks Intensive',
    imageTitle: 'Memory Skills Course Cover',
  },
  {
    id: 'english-grammar',
    title: 'English Grammar & Vocabulary',
    tagline: 'Speak & Write Flawless English',
    desc: 'Master foundational to advanced grammar rules, sentence structures, active vocabulary, and conversational fluency for everyday confidence.',
    types: ['Tenses & Sentence Formation', 'Vocabulary Enhancement', 'Spoken English Practice'],
    duration: '1 Month',
    imageTitle: 'English Grammar Cover',
  },
  {
    id: 'graphology',
    title: 'Graphology & Handwriting Analysis',
    tagline: 'Decode Personality Through Pen Strokes',
    desc: 'Fascinating scientific study of handwriting patterns, slants, pressure, and margins to discover behavioral traits and emotional patterns.',
    types: ['Stroke Analysis', 'Personality Profiling', 'Grapho-Therapy Fundamentals'],
    duration: 'Specialized Workshops',
    imageTitle: 'Graphology Workshop Cover',
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Page Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#071330] via-[#0B2560] to-[#0D1F4D] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Curriculum & Programs
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            List Of Courses
          </h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-base md:text-lg">
            Explore our expert-led courses and start your journey today! Choose the course that fits your goals and unlock your true potential.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <ImagePlaceholder
                  title={course.imageTitle}
                  subtitle="Image to be uploaded"
                  aspectRatio="aspect-video"
                  className="rounded-b-none"
                />

                <div className="p-6 md:p-8">
                  <span className="text-xs font-bold text-primary bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    {course.duration}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">
                    "{course.tagline}"
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                    {course.types.map((t) => (
                      <div key={t} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                        <FiCheck className="text-primary shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <Link
                  to="/contact-us/"
                  className="flex-1 py-3 px-4 rounded-xl text-center text-sm font-bold text-white bg-primary hover:bg-blue-700 transition-colors"
                >
                  Enroll Now
                </Link>
                <a
                  href={`https://wa.me/919844856288?text=Hello%2C%20I%20am%20interested%20in%20enrolling%20in%20the%20${encodeURIComponent(
                    course.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors text-lg"
                  aria-label="Enquire on WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
