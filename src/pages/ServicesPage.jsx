import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCheck, FiPhone } from 'react-icons/fi';
import Seo from '../components/common/Seo';
import { SERVICES_DATA, SERVICES_WHATSAPP, SERVICES_HIGHLIGHTS } from '../data/servicesData';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Seo
        title="Digital Marketing Services"
        description="Grow your business with Mind Power Academy's digital marketing services — Google Business Optimization, Social Media Marketing, Meta & Google Ads, Website Development, Lead Generation, Branding, Video Marketing and Online Reputation Management."
        path="/services"
      />

      {/* ───── Page Banner ───── */}
      <section className="relative overflow-hidden py-14 sm:py-20 md:py-24 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/page-banner.jpg"
            alt="Mind Power Academy Digital Marketing Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#034ea2]/90 via-[#046bd2]/85 to-[#0b2560]/90" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            Digital Growth Partner
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight">
            Our Digital Marketing{' '}
            <span className="underline decoration-white/40">Services</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Empowering growth through digital — get more customers, build trust, grow your brand online.
          </p>
        </div>
      </section>

      {/* ───── Services Grid ───── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              End-to-end digital marketing solutions tailored for your business growth.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {SERVICES_DATA.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h3 className="font-bold text-navy text-base sm:text-lg leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Highlights Strip ───── */}
      <section className="bg-primary py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            {SERVICES_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FiCheck className="text-white text-lg" />
                </div>
                <span className="text-white font-bold text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Poster Image ───── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Your <span className="text-primary">Digital Growth</span> Partner
            </h2>
          </motion.div>
          <motion.img
            src="/images/digital-marketing-poster.jpeg"
            alt="Mind Power Academy Digital Marketing Services — Google Business Profile Optimization, Social Media Marketing, Meta & Google Ads, Website Development, Lead Generation, Branding & Creative Design, Video & Reel Marketing, Online Reputation Management"
            className="w-full max-w-2xl mx-auto block rounded-2xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* ───── CTA Section ───── */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#034ea2] via-[#046bd2] to-[#0b2560] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8 text-sm sm:text-base">
              Let's discuss how we can help you reach more customers, increase sales and build a strong brand online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={`https://wa.me/${SERVICES_WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-base tracking-wide bg-[#25D366] text-white hover:bg-[#1fba59] shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:+${SERVICES_WHATSAPP}`}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-base tracking-wide bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 transition-all duration-200"
              >
                <FiPhone className="text-lg" />
                Call: 94827 79529
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

