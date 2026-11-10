import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight, FiCheck, FiLayers, FiPhone } from 'react-icons/fi';
import Seo from '../components/common/Seo';
import { COURSE_CATEGORIES, COURSES_DATA } from '../data/coursesData';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses =
    selectedCategory === 'all'
      ? COURSES_DATA
      : COURSES_DATA.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Seo
        title="Courses"
        description="Explore all 8 courses at Mind Power Academy: handwriting improvement (simple, cursive, running), calligraphy, graphology, memory skills, pendulum dowsing, English grammar (basic & advanced), personality development and quantum healing."
        path="/courses"
      />

      {/* 1. Page Banner */}
      <section className="relative overflow-hidden py-14 sm:py-20 md:py-24 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/page-banner.jpg"
            alt="Mind Power Academy Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#034ea2]/90 via-[#046bd2]/85 to-[#0b2560]/90" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            Transformative Curriculum
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight">
            Explore <span className="underline decoration-white/40">Our Courses</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-blue-100 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Choose a program below to view complete curriculum details, sub-courses, and enrollment options tailored to your goals.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5 sm:justify-center">
            {COURSE_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              const count =
                category.id === 'all'
                  ? COURSES_DATA.length
                  : COURSES_DATA.filter((c) => c.category === category.id).length;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                    isActive
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'bg-slate-50 text-gray-700 border-gray-200 hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  {category.label} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Courses Directory Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course, idx) => (
            <motion.article
              key={course.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
              <Link to={`/courses/${course.slug}/`} className="relative h-52 overflow-hidden bg-slate-100 block group">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span
                  className="absolute top-3.5 left-3.5 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md"
                  style={{ backgroundColor: course.color }}
                >
                  {course.badge}
                </span>
                {course.subTracks && (
                  <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <FiLayers className="text-xs" />
                    <span>{course.subTracks.length} Sub-Courses</span>
                  </span>
                )}
              </Link>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <Link to={`/courses/${course.slug}/`} className="group">
                  <h2 className="text-xl font-extrabold text-gray-900 group-hover:text-primary transition-colors">
                    {course.title}
                  </h2>
                </Link>
                <p className="text-primary font-semibold text-xs mt-1 mb-3">
                  "{course.tagline}"
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {course.shortDesc}
                </p>

                {/* Sub-courses OR Key Highlights */}
                {course.subTracks ? (
                  <div className="mb-5 bg-slate-50 rounded-2xl p-3.5 border border-blue-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Included Tracks
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {course.subTracks.map((track) => (
                        <Link
                          key={track.slug}
                          to={`/courses/${course.slug}/${track.slug}`}
                          className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white hover:bg-blue-50 border border-gray-100 hover:border-blue-200 text-xs font-semibold text-gray-800 hover:text-primary transition-colors"
                        >
                          <span>
                            {track.letter}) {track.shortName}
                          </span>
                          <FiArrowRight className="text-primary shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mb-5 space-y-1.5">
                    {course.highlights.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-gray-600">
                        <FiCheck className="text-primary shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2.5">
                  <Link
                    to={`/courses/${course.slug}/`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary hover:bg-blue-700 text-white shadow-sm transition-colors"
                  >
                    <span>View Course</span>
                    <FiArrowRight />
                  </Link>
                  <Link
                    to={`/contact-us/?course=${encodeURIComponent(course.contactOption)}`}
                    className="py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 hover:bg-blue-100 transition-colors text-center"
                  >
                    Enroll
                  </Link>
                  <a
                    href={`https://wa.me/919844856288?text=${encodeURIComponent(
                      `Hello! I am interested in enrolling in the ${course.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`WhatsApp Inquiry for ${course.title}`}
                    title="Inquire on WhatsApp"
                    className="p-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#1da851] hover:text-white transition-colors shrink-0"
                  >
                    <FaWhatsapp className="text-base" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
                Need Guidance?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Not sure which course is right for you?
              </h2>
              <p className="text-blue-100 mt-2 text-xs sm:text-sm md:text-base">
                Call our expert mentors directly for free counseling and personalised batch timings.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="tel:+919844856288"
                className="px-6 py-3.5 rounded-full font-bold text-sm bg-white text-blue-800 hover:bg-blue-50 shadow-lg flex items-center justify-center gap-2 transition-all w-full sm:w-auto text-center"
              >
                <FiPhone />
                <span>+91 98448 56288</span>
              </a>
              <Link
                to="/contact-us/"
                className="px-6 py-3.5 rounded-full font-bold text-sm bg-blue-900/60 hover:bg-blue-950 border border-white/30 text-white shadow-lg flex items-center justify-center gap-2 transition-all w-full sm:w-auto text-center"
              >
                <span>Contact Us</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
