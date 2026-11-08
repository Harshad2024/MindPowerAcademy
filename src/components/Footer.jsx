import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1D4ED8] text-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-blue-400/30">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/logo.png"
                alt="Mind Power Academy"
                className="h-14 bg-white rounded-xl p-1.5 shadow-sm"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div
                style={{ display: 'none' }}
                className="bg-white text-primary font-black px-4 py-2 rounded-xl text-lg uppercase tracking-tight"
              >
                Mind Power Academy
              </div>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Empower your mind, transform your future. We are dedicated to nurturing the hidden potential within every individual through practical, expert-led training.
            </p>
            <div className="flex gap-3 text-lg">
              <a
                href="https://www.instagram.com/mindpower__academy?mdxt=MXg1OW43ZGU3d2pnaA=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary flex items-center justify-center transition-all"
              >
                <FiInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/1C62iHuPPo/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary flex items-center justify-center transition-all"
              >
                <FiFacebook />
              </a>
              <a
                href="https://wa.me/919844856288"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary flex items-center justify-center transition-all"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://youtube.com/@grammar_boost?si=vStE-cgJPdeMnUo0"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary flex items-center justify-center transition-all"
              >
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 tracking-wide text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us/" className="hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses/" className="hover:text-white hover:underline transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/upcoming-events/" className="hover:text-white hover:underline transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/past-events/" className="hover:text-white hover:underline transition-colors">
                  Past Events & Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact-us/" className="hover:text-white hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h4 className="text-lg font-bold mb-5 tracking-wide text-white">Our Courses</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <Link to="/courses/" className="hover:text-white hover:underline transition-colors">
                  Personality Development
                </Link>
              </li>
              <li>
                <Link to="/courses/" className="hover:text-white hover:underline transition-colors">
                  English Grammar
                </Link>
              </li>
              <li>
                <Link to="/courses/" className="hover:text-white hover:underline transition-colors">
                  Handwriting Improvement
                </Link>
              </li>
              <li>
                <Link to="/courses/" className="hover:text-white hover:underline transition-colors">
                  Calligraphy Course
                </Link>
              </li>
              <li>
                <Link to="/courses/" className="hover:text-white hover:underline transition-colors">
                  Memory Skills & Graphology
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div>
            <h4 className="text-lg font-bold mb-5 tracking-wide text-white">Privacy Policy</h4>
            <ul className="space-y-3 text-sm text-blue-100 mb-6">
              <li>
                <Link to="/terms-conditions/" className="hover:text-white hover:underline transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy/" className="hover:text-white hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer/" className="hover:text-white hover:underline transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>

            <div className="text-xs text-blue-200 space-y-2 break-words">
              <a
                href="https://maps.app.goo.gl/FnsDkEs4osP6niS67"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors block"
              >
                📍 No 92, Lokappana Hakkal, Rajnagar, Vidya Nagar, Hubballi, Karnataka 580031
              </a>
              <p>
                📞{' '}
                <a href="tel:+919844856288" className="hover:text-white transition-colors">
                  +91 98448 56288
                </a>{' '}
                |{' '}
                <a href="tel:+919482779529" className="hover:text-white transition-colors">
                  +91 94827 79529
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-200 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Mind Power Academy. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center sm:justify-start">
            Empowering Minds • Shaping Futures
          </p>
        </div>
      </div>
    </footer>
  );
}
