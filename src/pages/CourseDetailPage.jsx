import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiChevronRight,
  FiEdit3,
  FiLayers,
  FiMapPin,
  FiMonitor,
  FiPhone,
  FiUsers,
} from 'react-icons/fi';
import Seo from '../components/common/Seo';
import { COURSES_DATA, getCourseBySlug } from '../data/coursesData';

export default function CourseDetailPage() {
  const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    return <Navigate to="/courses/" replace />;
  }

  const otherCourses = COURSES_DATA.filter((c) => c.slug !== course.slug).slice(0, 3);
  const whatsappMessage = `Hello! I am interested in enrolling in the ${course.title}.`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Seo
        title={course.title}
        description={course.fullDesc}
        path={`/courses/${course.slug}`}
      />

      {/* 1. Course Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071330] via-[#0B2560] to-[#0D1F4D] text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-blue-200 mb-6"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <FiChevronRight className="text-blue-400 shrink-0" />
            <Link to="/courses/" className="hover:text-white transition-colors">
              Courses
            </Link>
            <FiChevronRight className="text-blue-400 shrink-0" />
            <span className="text-white font-semibold">{course.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7"
            >
              <span
                className="inline-block py-1 px-3.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
                style={{ backgroundColor: course.color }}
              >
                {course.badge}
              </span>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-blue-200 font-semibold text-sm sm:text-base md:text-lg mt-2.5 mb-4">
                "{course.tagline}"
              </p>

              <p className="text-blue-50/90 text-sm sm:text-base leading-relaxed max-w-2xl mb-7">
                {course.fullDesc}
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to={`/contact-us/?course=${encodeURIComponent(course.contactOption)}`}
                  className="px-7 py-3.5 rounded-full font-bold text-sm bg-white text-blue-900 hover:bg-blue-50 shadow-lg transition-all text-center uppercase tracking-wider"
                >
                  Enroll Now
                </Link>
                <a
                  href={`https://wa.me/919844856288?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-full font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 shadow-lg transition-all text-center"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-white/5 p-2">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Handwriting Styles Section (All 3 on this one page) */}
      {course.styles && (
        <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="inline-flex items-center gap-1.5 text-primary font-bold text-xs uppercase tracking-widest">
                <FiEdit3 />
                <span>Styles Covered</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                Handwriting Styles in This Course
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2">
                All three handwriting formats are covered thoroughly in our curriculum so students master print clarity, flowing elegance, and exam speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {course.styles.map((style) => (
                <div
                  key={style.name}
                  className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-blue-100/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                      {style.name}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {style.title}
                    </h3>
                    <p className="text-primary text-xs font-semibold mb-3">{style.motto}</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {style.text}
                    </p>

                    <div className="pt-2 border-t border-gray-200/60 mb-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                        Key Focus Points
                      </h4>
                      <ul className="space-y-2">
                        {style.focusPoints.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-xs text-gray-700">
                            <FiCheck className="text-primary shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-blue-100">
                    <p className="text-[11px] text-gray-500 mb-3">
                      <strong className="text-gray-700">Best For:</strong> {style.idealFor}
                    </p>
                    <Link
                      to={`/contact-us/?course=${encodeURIComponent(
                        `${course.contactOption} - ${style.name}`
                      )}`}
                      className="block text-center w-full py-2.5 px-3 rounded-xl bg-primary hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Enroll in {style.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. English Grammar Levels Section (Both on this one page) */}
      {course.levels && (
        <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="inline-flex items-center gap-1.5 text-primary font-bold text-xs uppercase tracking-widest">
                <FiLayers />
                <span>Curriculum Levels</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                Grammar Levels in This Course
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2">
                Whether you need to build a rock-solid foundation or master advanced fluency, both levels are taught with practical exercises and personal feedback.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {course.levels.map((level) => (
                <div
                  key={level.name}
                  className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-blue-100/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                      {level.name}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {level.title}
                    </h3>
                    <p className="text-primary text-xs sm:text-sm font-semibold mb-3">{level.motto}</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {level.text}
                    </p>

                    <div className="pt-2 border-t border-gray-200/60 mb-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                        Key Focus Points
                      </h4>
                      <ul className="space-y-2">
                        {level.focusPoints.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                            <FiCheck className="text-primary shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-blue-100">
                    <p className="text-xs text-gray-500 mb-3">
                      <strong className="text-gray-700">Best For:</strong> {level.idealFor}
                    </p>
                    <Link
                      to={`/contact-us/?course=${encodeURIComponent(
                        `${course.contactOption} - ${level.name}`
                      )}`}
                      className="block text-center w-full py-3 rounded-xl bg-primary hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Enroll in {level.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Curriculum Details & Benefits */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: What You Will Gain + Modules */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">
                What You Will Gain
              </h2>
              <ul className="space-y-3.5">
                {course.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary text-lg shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">
                Core Curriculum Highlights
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {course.highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 border border-blue-200/60 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
                  >
                    <FiCheck className="text-primary shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Who Is It For + Learning Modes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                  <FiUsers className="text-lg" />
                </div>
                <h2 className="text-xl font-extrabold text-gray-900">Who Should Join?</h2>
              </div>
              <ul className="space-y-3">
                {course.whoIsItFor.map((audience) => (
                  <li key={audience} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-4">
              <h3 className="text-lg sm:text-xl font-bold">Flexible Learning Modes</h3>
              <div className="space-y-3 text-sm text-blue-100">
                <div className="flex items-start gap-3">
                  <FiMonitor className="text-lg shrink-0 mt-0.5 text-blue-300" />
                  <span>Interactive Live Online Batches accessible from anywhere</span>
                </div>
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-lg shrink-0 mt-0.5 text-blue-300" />
                  <span>Hands-on In-Person Sessions at Vidya Nagar, Hubballi</span>
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="tel:+919844856288"
                  className="w-full py-3 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <FiPhone />
                  <span>Call +91 98448 56288</span>
                </a>
                <Link
                  to={`/contact-us/?course=${encodeURIComponent(course.contactOption)}`}
                  className="w-full py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Request Batch Details</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Explore Other Courses */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest">
                Keep Learning
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                Explore Other Courses
              </h2>
            </div>
            <Link
              to="/courses/"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-800 transition-colors"
            >
              <FiArrowLeft />
              <span>View All 8 Courses</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCourses.map((item) => (
              <Link
                key={item.slug}
                to={`/courses/${item.slug}/`}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="h-44 overflow-hidden bg-slate-200 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span
                    className="absolute top-3 left-3 text-white text-[11px] font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.badge}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-4">
                      {item.shortDesc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                    <span>View Course Details</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
