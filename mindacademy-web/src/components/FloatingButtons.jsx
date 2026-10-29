import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiX, FiArrowUp } from 'react-icons/fi';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp + Call floating cluster */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col items-center gap-2">
        {expanded && (
          <>
            <a
              href="tel:+919844856288"
              aria-label="Call Us"
              className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
            >
              <FiPhone size={20} />
            </a>
            <a
              href="https://wa.me/919844856288"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg hover:bg-emerald-600 hover:scale-110 transition-all"
            >
              <FaWhatsapp size={22} />
            </a>
          </>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle contact options"
          className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white shadow-lg hover:bg-gray-800 transition-all"
        >
          {expanded ? <FiX size={16} /> : <FiPhone size={16} />}
        </button>
      </div>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-4 z-50 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all"
        >
          <FiArrowUp />
        </button>
      )}
    </>
  );
}
