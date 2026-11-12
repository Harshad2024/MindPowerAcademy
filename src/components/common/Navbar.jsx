import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { COURSES_DATA } from '../../data/coursesData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [workshopOpen, setWorkshopOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(72);
  const navRef = useRef(null);
  const location = useLocation();

  // Measure nav height so the spacer keeps content from hiding behind the fixed bar
  const measureNav = useCallback(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    measureNav();
    window.addEventListener('resize', measureNav);
    return () => window.removeEventListener('resize', measureNav);
  }, [measureNav]);

  // Re-measure when scrolled state changes (padding changes)
  useEffect(() => {
    measureNav();
  }, [scrolled, measureNav]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setCoursesOpen(false);
    setWorkshopOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close sidebar on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const isContactActive =
    location.pathname === '/contact-us' ||
    location.pathname === '/contact-us/';

  const isAboutActive =
    location.pathname === '/about-us' ||
    location.pathname === '/about-us/';

  const isCoursesActive = location.pathname.startsWith('/courses');

  const isWorkshopsActive =
    location.pathname.startsWith('/upcoming-events') ||
    location.pathname.startsWith('/past-events') ||
    location.pathname.startsWith('/gallery');

  const isHomeActive = location.pathname === '/';

  return (
    <>
      {/* ───── Fixed Navbar: always visible at top on ALL devices ───── */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md py-1.5 sm:py-2' : 'shadow-sm py-2 sm:py-3'
        }`}
      >
        {/* Top Info Strip — hidden on mobile when scrolled, always on desktop */}
        <div
          className={`max-w-7xl mx-auto px-3 sm:px-4 pb-1.5 transition-all duration-200 ${
            scrolled ? 'hidden md:flex' : 'flex'
          } justify-between items-center gap-2 text-xs text-gray-500 border-b border-gray-100 mb-1.5`}
        >
          <div className="flex items-center gap-2 sm:gap-5 min-w-0 flex-1">
            <a
              href="mailto:mindpoweracademy77@gmail.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors min-w-0"
              title="mindpoweracademy77@gmail.com"
            >
              <FiMail className="text-xs shrink-0" />
              <span className="truncate max-w-[120px] xs:max-w-[190px] sm:max-w-none text-[11px] sm:text-xs">
                mindpoweracademy77@gmail.com
              </span>
            </a>
            <a
              href="tel:+919844856288"
              className="hidden md:flex items-center gap-1.5 hover:text-primary transition-colors shrink-0"
            >
              <FiPhone className="text-xs" />
              <span className="text-xs">+91 98448 56288</span>
            </a>
          </div>

          <div className="flex items-center gap-2 xs:gap-3 sm:gap-3 shrink-0">
            <a
              href="https://www.instagram.com/mindpower__academy/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-base sm:text-lg hover:scale-110 hover:text-pink-500 transition-all duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1C62iHuPPo/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-base sm:text-lg hover:scale-110 hover:text-blue-600 transition-all duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://maps.app.goo.gl/FnsDkEs4osP6niS67"
              target="_blank"
              rel="noreferrer"
              aria-label="Location on Google Maps"
              title="Location on Google Maps"
              className="text-base sm:text-lg hover:scale-110 hover:text-red-500 transition-all duration-200"
            >
              <FaMapMarkerAlt />
            </a>
            <a
              href="https://wa.me/919844856288"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-base sm:text-lg hover:scale-110 text-[#25D366] hover:text-[#4AE380] transition-all duration-200"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://youtube.com/@grammar_boost?si=vStE-cgJPdeMnUo0"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-base sm:text-lg hover:scale-110 hover:text-red-500 transition-all duration-200"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Main nav row: Logo + Links + Hamburger */}
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/logo.png"
              alt="Mind Power Academy"
              className="h-12 sm:h-14 md:h-14 w-auto object-contain transition-all"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div
              style={{ display: 'none' }}
              className="flex items-center gap-2 font-black text-xl tracking-tight text-primary uppercase"
            >
              <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-black text-sm">
                MP
              </span>
              <span>Mind Power</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-[15px]">
            <li>
              <NavLink
                to="/"
                className={() =>
                  `transition-colors duration-200 hover:text-primary ${
                    isHomeActive ? 'text-primary font-bold' : 'text-gray-700'
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about-us/"
                className={() =>
                  `transition-colors duration-200 hover:text-primary ${
                    isAboutActive ? 'text-primary font-bold' : 'text-gray-700'
                  }`
                }
              >
                About Us
              </NavLink>
            </li>

            {/* Courses Dropdown */}
            <li className="relative group">
              <Link
                to="/courses/"
                className={`flex items-center gap-1.5 transition-colors py-2 font-semibold ${
                  isCoursesActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                }`}
              >
                <span>Courses</span>
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full -left-12 mt-1 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                <Link
                  to="/courses/"
                  className={`block px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors border-b border-gray-100 mb-1 ${
                    location.pathname === '/courses' || location.pathname === '/courses/'
                      ? 'bg-blue-50 text-primary'
                      : 'text-gray-500 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  All Courses Overview ({COURSES_DATA.length})
                </Link>
                {COURSES_DATA.map((course) => {
                  const isCourseCurrent = location.pathname.startsWith(`/courses/${course.slug}`);
                  return (
                    <Link
                      key={course.slug}
                      to={`/courses/${course.slug}/`}
                      className={`block px-4 py-2 text-sm font-semibold transition-colors ${
                        isCourseCurrent
                          ? 'bg-blue-50 text-primary font-bold'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-primary'
                      }`}
                    >
                      {course.title}
                    </Link>
                  );
                })}
              </div>
            </li>

            {/* Workshops Dropdown */}
            <li className="relative group">
              <button
                type="button"
                className={`flex items-center gap-1.5 transition-colors py-2 font-semibold ${
                  isWorkshopsActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setWorkshopOpen(!workshopOpen)}
              >
                <span>Workshops</span>
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </button>
              <ul className="absolute top-full left-0 mt-1 w-52 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <Link
                    to="/upcoming-events/"
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      location.pathname.startsWith('/upcoming-events')
                        ? 'bg-blue-50 text-primary font-bold'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-primary'
                    }`}
                  >
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/past-events/"
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      location.pathname.startsWith('/past-events') || location.pathname.startsWith('/gallery')
                        ? 'bg-blue-50 text-primary font-bold'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-primary'
                    }`}
                  >
                    Past Events
                  </Link>
                </li>
              </ul>
            </li>

            {/* Contact Us */}
            <li>
              <NavLink
                to="/contact-us/"
                className={() =>
                  `transition-colors duration-200 hover:text-primary ${
                    isContactActive ? 'text-primary font-bold' : 'text-gray-700'
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Enroll Now CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact-us/"
              className="px-6 py-2.5 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r from-blue-700 to-blue-900 text-white hover:from-blue-800 hover:to-indigo-950 shadow-md hover:shadow-lg transition-all duration-200 uppercase"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-md hover:bg-blue-800 transition-colors focus:outline-none shrink-0"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* Spacer: pushes page content below the fixed navbar */}
      <div style={{ height: navHeight }} aria-hidden="true" />

      {/* ───── Mobile Sidebar (Slide-Over Drawer) ───── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Sidebar Drawer */}
            <motion.aside
              key="mobile-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-[310px] sm:w-[350px] max-w-[85vw] bg-white z-[80] shadow-2xl flex flex-col md:hidden"
              aria-label="Mobile Navigation"
            >
              {/* Sidebar Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-slate-50">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <img
                    src="/images/logo.png"
                    alt="Mind Power Academy"
                    className="h-11 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-xl bg-gray-200/80 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Sidebar Links (Scrollable) */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-base font-semibold transition-colors ${
                    isHomeActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/about-us/"
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-base font-semibold transition-colors ${
                    isAboutActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  About Us
                </Link>

                {/* Courses Accordion */}
                <div>
                  <button
                    type="button"
                    className={`w-full flex justify-between items-center py-2 text-base font-semibold transition-colors ${
                      isCoursesActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                    }`}
                    onClick={() => setCoursesOpen(!coursesOpen)}
                  >
                    <span>Courses</span>
                    <FiChevronDown
                      className={`transition-transform duration-200 ${coursesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {coursesOpen && (
                    <div className="pl-3 space-y-1.5 pt-1 pb-2 border-l-2 border-primary/20 ml-2">
                      <Link
                        to="/courses/"
                        onClick={() => setMobileOpen(false)}
                        className={`block py-1 text-xs font-bold uppercase tracking-wider ${
                          location.pathname === '/courses' || location.pathname === '/courses/'
                            ? 'text-primary'
                            : 'text-gray-500 hover:text-primary'
                        }`}
                      >
                        All Courses Overview
                      </Link>
                      {COURSES_DATA.map((course) => (
                        <Link
                          key={course.slug}
                          to={`/courses/${course.slug}/`}
                          onClick={() => setMobileOpen(false)}
                          className={`block py-1 text-sm ${
                            location.pathname.startsWith(`/courses/${course.slug}`)
                              ? 'text-primary font-bold'
                              : 'text-gray-700 hover:text-primary'
                          }`}
                        >
                          {course.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Workshops Accordion */}
                <div>
                  <button
                    type="button"
                    className={`w-full flex justify-between items-center py-2 text-base font-semibold transition-colors ${
                      isWorkshopsActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                    }`}
                    onClick={() => setWorkshopOpen(!workshopOpen)}
                  >
                    <span>Workshops</span>
                    <FiChevronDown
                      className={`transition-transform duration-200 ${workshopOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {workshopOpen && (
                    <div className="pl-3 space-y-1.5 pt-1 pb-2 border-l-2 border-primary/20 ml-2">
                      <Link
                        to="/upcoming-events/"
                        onClick={() => setMobileOpen(false)}
                        className={`block py-1 text-sm ${
                          location.pathname.startsWith('/upcoming-events')
                            ? 'text-primary font-bold'
                            : 'text-gray-600 hover:text-primary'
                        }`}
                      >
                        Upcoming Events
                      </Link>
                      <Link
                        to="/past-events/"
                        onClick={() => setMobileOpen(false)}
                        className={`block py-1 text-sm ${
                          location.pathname.startsWith('/past-events') || location.pathname.startsWith('/gallery')
                            ? 'text-primary font-bold'
                            : 'text-gray-600 hover:text-primary'
                        }`}
                      >
                        Past Events &amp; Gallery
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact-us/"
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-base font-semibold transition-colors ${
                    isContactActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Contact Us
                </Link>

                {/* Enroll CTA */}
                <div className="pt-2">
                  <Link
                    to="/contact-us/"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center w-full py-3 rounded-full font-bold text-sm tracking-wide bg-primary text-white shadow-md uppercase hover:bg-blue-700 transition-colors"
                  >
                    Enroll Now
                  </Link>
                </div>

                {/* Quick Contact & Map info */}
                <div className="pt-4 mt-3 border-t border-gray-100 space-y-2.5">
                  <a
                    href="https://maps.app.goo.gl/FnsDkEs4osP6niS67"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-primary transition-colors py-1"
                  >
                    <FaMapMarkerAlt className="text-red-500 text-base shrink-0" />
                    <span>Locate on Google Maps</span>
                  </a>
                  <a
                    href="tel:+919844856288"
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-primary transition-colors py-1"
                  >
                    <FiPhone className="text-primary text-base shrink-0" />
                    <span>+91 98448 56288</span>
                  </a>
                  <a
                    href="mailto:mindpoweracademy77@gmail.com"
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-primary transition-colors py-1 break-all"
                  >
                    <FiMail className="text-primary text-base shrink-0" />
                    <span>mindpoweracademy77@gmail.com</span>
                  </a>
                </div>

                {/* Social icons */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-around text-xl text-gray-600">
                  <a href="https://www.instagram.com/mindpower__academy/" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 hover:text-pink-600 transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook.com/share/1C62iHuPPo/" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 hover:text-blue-600 transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href="https://wa.me/919844856288" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 text-[#25D366] hover:scale-110 transition-transform">
                    <FaWhatsapp />
                  </a>
                  <a href="https://youtube.com/@grammar_boost?si=vStE-cgJPdeMnUo0" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 hover:text-red-600 transition-colors">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
