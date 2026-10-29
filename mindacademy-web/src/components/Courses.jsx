import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import ImagePlaceholder from './common/ImagePlaceholder';

const courses = [
  {
    tag: 'Transform Your Life',
    title: 'Handwriting Improvement',
    desc: 'Behind every successful person there is a great Writing and Signature. Improve your handwriting with our expert techniques.',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
    color: '#3B5BDB',
  },
  {
    tag: 'Art in Every Stroke',
    title: 'Calligraphy Course',
    desc: 'Develop the art of beautiful writing with expert guidance. Master various calligraphy styles.',
    img: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80',
    color: '#5C4BC1',
  },
  {
    tag: 'Handwriting Analysis',
    title: 'Graphology Course',
    desc: 'Understand personality traits through handwriting analysis. A fascinating science of self-discovery.',
    img: '/images/graphology.jpg',
    color: '#2563EB',
  },
  {
    tag: 'Master Memory Skills',
    title: 'Memory Skill Course',
    desc: 'Master memory-boosting techniques for better retention and sharper recall in daily life and studies.',
    img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80',
    color: '#7C3AED',
  },
  {
    tag: 'Find Your Inner Guide',
    title: 'Pendulum Dowsing',
    desc: 'Learn the art of divination to connect with your subconscious and tap into your inner wisdom.',
    img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80',
    color: '#9333EA',
  },
  {
    tag: 'Transform Your Life',
    title: 'English Grammar Course',
    desc: 'Master English Grammar with our expert-guided classes and build strong communication skills.',
    img: '/images/english-grammar.jpg',
    color: '#1D4ED8',
  },
  {
    tag: 'Build Your Life',
    title: 'Personality Development',
    desc: 'Build confidence and enhance your interpersonal skills. Transform your personality for professional and personal success.',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
    color: '#0369A1',
  },
  {
    tag: 'Heal Holistically',
    title: 'Quantum Healing Course',
    desc: 'Learn techniques to promote balance, well-being, and healing through the science of quantum energy.',
    img: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=600&q=80',
    color: '#6D28D9',
  },
];

function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-md card-hover overflow-hidden flex flex-col border border-gray-100"
    >
      {/* Image with fallback */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div style={{ display: 'none' }} className="w-full h-full">
          <ImagePlaceholder
            title={course.title}
            subtitle="Course thumbnail"
            aspectRatio="h-full w-full"
            className="rounded-none border-none"
          />
        </div>
        <span
          className="absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
          style={{ backgroundColor: course.color }}
        >
          {course.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{course.desc}</p>
        <div className="flex gap-3">
          <Link
            to="/courses/"
            className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 hover:bg-primary hover:text-white transition-colors"
          >
            Details
          </Link>
          <Link
            to="/contact-us/"
            className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-primary hover:bg-blue-700 transition-colors"
          >
            Enroll
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-widest">What We Offer</span>
          <h2 className="section-title mt-2">Our Courses</h2>
          <p className="section-subtitle">
            Transformative programs crafted to unlock your hidden potential, boost confidence, and empower your personal growth journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, i) => (
            <CourseCard key={course.title} course={course} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/courses/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-primary text-white hover:bg-blue-700 shadow-md transition-all uppercase tracking-wider"
          >
            <span>Explore All Course Details</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
