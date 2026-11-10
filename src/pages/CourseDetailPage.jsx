import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiChevronRight,
  FiLayers,
  FiMapPin,
  FiMonitor,
  FiPhone,
  FiUsers,
} from 'react-icons/fi';
import Seo from '../components/common/Seo';
import { COURSES_DATA, getCourseBySlug, getSubTrackBySlug } from '../data/coursesData';

export default function CourseDetailPage() {
  const { courseSlug, subTrackSlug } = useParams();
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    return <Navigate to="/courses/" replace />;
  }

  const activeTrack = subTrackSlug ? getSubTrackBySlug(course, subTrackSlug) : null;
  if (subTrackSlug && !activeTrack) {
    return <Navigate to={`/courses/${course.slug}/`} replace />;
  }

  const hasSubTracks = Boolean(course.subTracks?.length);
  const seoTitle = activeTrack ? `${activeTrack.title} — ${course.shortTitle}` : course.title;
  const seoDesc = activeTrack ? activeTrack.text : course.fullDesc;
  const seoPath = activeTrack
    ? `/courses/${course.slug}/${activeTrack.slug}`
    : `/courses/${course.slug}`;

  const enrollLabel = activeTrack
    ? `${course.contactOption} - ${activeTrack.shortName}`
    : course.contactOption;

  const whatsappMessage = activeTrack
    ? `Hello! I am interested in enrolling in ${course.title} (${activeTrack.shortName}).`
    : `Hello! I am interested in enrolling in the ${course.title}.`;

  const otherCourses = COURSES_DATA.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Seo title={seoTitle} description={seoDesc} path={seoPath} />

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
            {activeTrack ? (
              <>
                <Link
                  to={`/courses/${course.slug}/`}
                  className="hover:text-white transition-colors"
                >
                  {course.shortTitle}
                </Link>
                <FiChevronRight className="text-blue-400 shrink-0" />
                <span className="text-white font-semibold">{activeTrack.shortName}</span>
              </>
            ) : (
              <span className="text-white font-semibold">{course.shortTitle}</span>
            )}
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
                {activeTrack ? activeTrack.title : course.title}
              </h1>

              <p className="text-blue-200 font-semibold text-sm sm:text-base md:text-lg mt-2.5 mb-4">
                {activeTrack ? activeTrack.motto : `"${course.tagline}"`}
              </p>

              <p className="text-blue-50/90 text-sm sm:text-base leading-relaxed max-w-2xl mb-7">
                {activeTrack ? activeTrack.text : course.fullDesc}
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to={`/contact-us/?course=${encodeURIComponent(enrollLabel)}`}
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

      {/* 2. Sub-Courses / Program Tracks Section (When applicable) */}
      {hasSubTracks && (
        <section className="py-10 sm:py-14 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-primary font-bold text-xs uppercase tracking-widest">
                  <FiLayers />
                  <span>Course Structure</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  {course.shortTitle} Tracks
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Select a specific track below to view its focus areas, or compare all modules side by side.
                </p>
              </div>
            </div>

            {/* Track Switcher Tabs */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <Link
                to={`/courses/${course.slug}/`}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                  !activeTrack
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-slate-50 text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                Overview (All {course.subTracks.length} Tracks)
              </Link>
              {course.subTracks.map((track) => {
                const isSelected = activeTrack?.slug === track.slug;
                return (
                  <Link
                    key={track.slug}
                    to={`/courses/${course.slug}/${track.slug}`}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                      isSelected
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'bg-slate-50 text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {track.letter}) {track.shortName}
                  </Link>
                );
              })}
            </div>

            {/* Focused Active Track Card OR Comparison Grid */}
            {activeTrack ? (
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider">
                      Track {activeTrack.letter.toUpperCase()}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                      {activeTrack.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm">{activeTrack.motto}</p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {activeTrack.text}
                    </p>
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                        Ideal For
                      </h4>
                      <p className="text-sm text-gray-800 font-medium">{activeTrack.idealFor}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm space-y-4">
                    <h4 className="font-bold text-gray-900 text-base">
                      Key Focus Areas
                    </h4>
                    <ul className="space-y-3">
                      {activeTrack.focusPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <FiCheckCircle className="text-primary text-base shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-3">{activeTrack.cta}</p>
                      <Link
                        to={`/contact-us/?course=${encodeURIComponent(enrollLabel)}`}
                        className="block text-center w-full py-3 rounded-xl bg-primary hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                      >
                        Enroll in {activeTrack.shortName}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 gap-6 ${
                  course.subTracks.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
                }`}
              >
                {course.subTracks.map((track) => (
                  <div
                    key={track.slug}
                    className="bg-slate-50 rounded-2xl p-6 border border-blue-100 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs font-bold uppercase">
                          {track.letter}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                          Specialized Track
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        {track.title}
                      </h3>
                      <p className="text-primary text-xs font-semibold mb-3">{track.motto}</p>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {track.text}
                      </p>
                      <ul className="space-y-2 mb-5">
                        {track.focusPoints.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-xs text-gray-700">
                            <FiCheck className="text-primary shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-blue-100/70 flex flex-col sm:flex-row gap-2.5">
                      <Link
                        to={`/courses/${course.slug}/${track.slug}`}
                        className="flex-1 text-center py-2.5 px-3 rounded-xl bg-white border border-blue-200 hover:border-primary text-primary text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Explore Track
                      </Link>
                      <Link
                        to={`/contact-us/?course=${encodeURIComponent(
                          `${course.contactOption} - ${track.shortName}`
                        )}`}
                        className="flex-1 text-center py-2.5 px-3 rounded-xl bg-primary hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Enroll
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. Course Curriculum & Benefits Details */}
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
                Core Curriculum Modules
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
                  to={`/contact-us/?course=${encodeURIComponent(enrollLabel)}`}
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

      {/* 4. Explore Other Courses */}
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
