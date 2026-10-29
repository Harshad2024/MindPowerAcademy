import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  {
    label: 'Workshops',
    href: '#workshops',
    children: [
      { label: 'Upcoming Workshops', href: '#workshops' },
      { label: 'Past Workshops', href: '#gallery' },
    ]
  },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workshopOpen, setWorkshopOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    setWorkshopOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <a href="mailto:mindpoweracademy77@gmail.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <FiMail size={14} />
              mindpoweracademy77@gmail.com
            </a>
            <a href="tel:+919844856288" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <FiPhone size={14} />
              +91 98448 56288
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/mindpower__academy?mdxt=MXg1OW43ZGU3d2pnaA==" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/1C62iHuPPo/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity"><FaFacebookF /></a>
            <a href="#contact" onClick={() => handleNavClick('#contact')} aria-label="Location" className="hover:opacity-70 transition-opacity"><FaMapMarkerAlt /></a>
            <a href="https://wa.me/919844856288" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:opacity-70 transition-opacity"><FaWhatsapp /></a>
            <a href="https://youtube.com/@grammar_boost?si=vStE-cgJPdeMnUo0" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:opacity-70 transition-opacity"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center">
            <img src="/images/logo.png" alt="Mind Power Academy Logo" className="h-14 w-auto" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 font-semibold text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setWorkshopOpen(!workshopOpen)}
                  >
                    {link.label} <FiChevronDown className={`transition-transform ${workshopOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <ul className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => handleNavClick(child.href)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="font-semibold text-gray-700 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Enroll Button */}
          <a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            className="hidden md:inline-block btn-primary"
          >
            ENROLL NOW
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[500px] border-t' : 'max-h-0'}`}>
          <div className="px-4 py-4 space-y-1 bg-white">
            {/* Mobile top info */}
            <div className="flex flex-col gap-2 text-sm text-gray-600 pb-3 border-b">
              <a href="mailto:mindpoweracademy77@gmail.com" className="flex items-center gap-2"><FiMail size={14} />mindpoweracademy77@gmail.com</a>
              <a href="tel:+919844856288" className="flex items-center gap-2"><FiPhone size={14} />+91 98448 56288</a>
            </div>
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block py-2.5 px-2 font-semibold text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="pl-4 border-l-2 border-primary/20 ml-2">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => handleNavClick(child.href)}
                        className="block py-2 px-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className="block text-center btn-primary"
              >
                ENROLL NOW
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
