import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMail, FiPhone, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workshopOpen, setWorkshopOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setWorkshopOpen(false);
  }, [location.pathname]);

  const isContactActive =
    location.pathname === '/contact-us' ||
    location.pathname === '/contact-us/';

  const isAboutActive =
    location.pathname === '/about-us' ||
    location.pathname === '/about-us/';

  const isCoursesActive =
    location.pathname === '/courses' ||
    location.pathname === '/courses/';

  const isWorkshopsActive =
    location.pathname.startsWith('/upcoming-events') ||
    location.pathname.startsWith('/past-events') ||
    location.pathname.startsWith('/gallery');

  const isHomeActive = location.pathname === '/';

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-primary text-white text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="mailto:mindpoweracademy77@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <FiMail className="text-sm" />
              <span>mindpoweracademy77@gmail.com</span>
            </a>
            <a
              href="tel:+919844856288"
              className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <FiPhone className="text-sm" />
              <span>+91 98448 56288</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebookF />
            </a>
            <Link
              to="/contact-us/"
              aria-label="Location"
              className="hover:scale-110 transition-transform"
            >
              <FaMapMarkerAlt />
            </Link>
            <a
              href="https://wa.me/919844856288"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hover:scale-110 transition-transform text-[#25D366]"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:scale-110 transition-transform"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md py-2.5' : 'shadow-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Mind Power Academy"
              className="h-12 md:h-14 w-auto object-contain"
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

            <li>
              <NavLink
                to="/courses/"
                className={() =>
                  `transition-colors duration-200 hover:text-primary ${
                    isCoursesActive ? 'text-primary font-bold' : 'text-gray-700'
                  }`
                }
              >
                Courses
              </NavLink>
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

            {/* Contact Us - Main CTA link */}
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

          {/* Enroll Now CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact-us/"
              className="px-6 py-2.5 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r from-blue-700 to-blue-900 text-white hover:from-blue-800 hover:to-indigo-950 shadow-md hover:shadow-lg transition-all duration-200 uppercase"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-2xl text-gray-800 p-2 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-xl space-y-3">
            <Link
              to="/"
              className={`block py-2 text-base font-semibold ${
                isHomeActive ? 'text-primary font-bold' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-us/"
              className={`block py-2 text-base font-semibold ${
                isAboutActive ? 'text-primary font-bold' : 'text-gray-700'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/courses/"
              className={`block py-2 text-base font-semibold ${
                isCoursesActive ? 'text-primary font-bold' : 'text-gray-700'
              }`}
            >
              Courses
            </Link>

            <div>
              <button
                type="button"
                className={`w-full flex justify-between items-center py-2 text-base font-semibold ${
                  isWorkshopsActive ? 'text-primary font-bold' : 'text-gray-700'
                }`}
                onClick={() => setWorkshopOpen(!workshopOpen)}
              >
                <span>Workshops</span>
                <FiChevronDown className={workshopOpen ? 'rotate-180' : ''} />
              </button>
              {workshopOpen && (
                <div className="pl-4 space-y-2 pt-1 border-l-2 border-primary/20 ml-2">
                  <Link
                    to="/upcoming-events/"
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
                    className={`block py-1 text-sm ${
                      location.pathname.startsWith('/past-events') || location.pathname.startsWith('/gallery')
                        ? 'text-primary font-bold'
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    Past Events
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact-us/"
              className={`block py-2 text-base font-semibold ${
                isContactActive ? 'text-primary font-bold' : 'text-gray-700'
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-2">
              <Link
                to="/contact-us/"
                className="block text-center w-full py-3 rounded-full font-bold text-sm tracking-wide bg-primary text-white shadow-md uppercase"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
