import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import ImagePlaceholder from './common/ImagePlaceholder';
import { COURSES_DATA } from '../data/coursesData';

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
      <Link
        to={`/courses/${course.slug}/`}
        className="relative h-52 overflow-hidden bg-slate-100 block group"
      >
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div style={{ display: 'none' }} className="w-full h-full">
          <ImagePlaceholder
            title={course.shortTitle}
            subtitle="Course thumbnail"
            aspectRatio="h-full w-full"
            className="rounded-none border-none"
          />
        </div>
        <span
          className="absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
          style={{ backgroundColor: course.color }}
        >
          {course.badge}
        </span>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <Link to={`/courses/${course.slug}/`} className="group">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {course.shortTitle}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{course.shortDesc}</p>

        {/* Sub-tracks quick links if applicable */}
        {course.subTracks && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {course.subTracks.map((track) => (
              <Link
                key={track.slug}
                to={`/courses/${course.slug}/${track.slug}`}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 text-gray-700 hover:text-primary border border-gray-200/70 hover:border-blue-200 transition-colors"
              >
                {track.letter}) {track.shortName}
              </Link>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-auto">
          <Link
            to={`/courses/${course.slug}/`}
            className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 hover:bg-primary hover:text-white transition-colors"
          >
            Details
          </Link>
          <Link
            to={`/contact-us/?course=${encodeURIComponent(course.contactOption)}`}
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
    <section id="courses" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-widest">What We Offer</span>
          <h2 className="section-title mt-2">Our Courses</h2>
          <p className="section-subtitle">
            Transformative programs crafted to unlock your hidden potential, boost confidence, and empower your personal growth journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {COURSES_DATA.map((course, i) => (
            <CourseCard key={course.slug} course={course} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/courses/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm bg-primary text-white hover:bg-blue-700 shadow-md transition-all uppercase tracking-wider"
          >
            <span>Explore All Course Details</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
