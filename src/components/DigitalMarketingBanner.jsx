import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { SERVICES_DATA, SERVICES_WHATSAPP } from '../data/servicesData';

/**
 * Homepage teaser section for Digital Marketing Services.
 * Shows a headline, 8-service grid, and CTAs linking to the full /services page.
 */
export default function DigitalMarketingBanner() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            Digital Growth Partner
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy leading-tight">
            Grow Your{' '}
            <span className="text-primary">Business</span>{' '}
            with Digital Marketing
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Get more customers, build credibility, increase sales and strengthen your brand presence — all with our expert digital marketing services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {SERVICES_DATA.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 group"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white text-lg sm:text-xl" />
                </div>
                <h3 className="font-bold text-navy text-sm sm:text-base leading-snug mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/services/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r from-blue-700 to-blue-900 text-white hover:from-blue-800 hover:to-indigo-950 shadow-md hover:shadow-lg transition-all duration-200 uppercase"
          >
            View All Services
            <FiArrowRight />
          </Link>
          <a
            href={`https://wa.me/${SERVICES_WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm tracking-wide bg-[#25D366] text-white hover:bg-[#1fba59] shadow-md hover:shadow-lg transition-all duration-200"
          >
            <FaWhatsapp className="text-lg" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

