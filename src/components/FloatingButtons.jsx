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
      <div className="fixed bottom-5 right-3 sm:bottom-6 sm:right-4 z-40 flex flex-col items-center gap-2">
        {expanded && (
          <>
            <a
              href="tel:+919844856288"
              aria-label="Call Us"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
            >
              <FiPhone size={19} />
            </a>
            <a
              href="https://wa.me/919844856288"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg hover:bg-emerald-600 hover:scale-110 transition-all"
            >
              <FaWhatsapp size={21} />
            </a>
          </>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle contact options"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-700 flex items-center justify-center text-white shadow-lg hover:bg-gray-800 transition-all"
        >
          {expanded ? <FiX size={15} /> : <FiPhone size={15} />}
        </button>
      </div>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-5 left-3 sm:bottom-6 sm:left-4 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all"
        >
          <FiArrowUp />
        </button>
      )}
    </>
  );
}
