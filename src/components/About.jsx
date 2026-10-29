import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import ImagePlaceholder from './common/ImagePlaceholder';

const stats = [
  { value: 15000, suffix: '+', label: 'Students Trained' },
  { value: 8, suffix: '+', label: 'Courses Offered' },
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Satisfaction Rate' },
];

function StatCard({ value, suffix, label }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
        {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : `0${suffix}`}
      </div>
      <div className="text-gray-600 font-medium text-sm md:text-base">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-widest">About Our Academy</span>
          <h2 className="section-title mt-2">Mind Power Academy</h2>
          <p className="section-subtitle">
            Through our expert-led courses, you'll discover powerful techniques to unlock your hidden abilities, sharpen your focus, and embrace success in every aspect of life. Start your transformative journey with us today!
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 bg-white rounded-3xl shadow-lg p-8"
        >
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </motion.div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden card-hover flex flex-col"
          >
            <div className="relative h-96 bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
              <img
                src="/images/umesh-p.png"
                alt="Umesh S. Phirangi - Founder CEO"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white pointer-events-none">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Founder, CEO</p>
                <h3 className="text-2xl font-bold text-white">Umesh .S. Phirangi</h3>
              </div>
            </div>
            <div className="p-6 text-gray-600 text-sm leading-relaxed flex-1">
              A visionary educator and mentor with over two decades of dedicated experience in personality development, handwriting improvement, and mind science. Umesh has transformed thousands of lives through his practical, results-driven teaching methodology.
            </div>
          </motion.div>

          {/* Co-Founder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden card-hover flex flex-col"
          >
            <div className="relative h-96 bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
              <img
                src="/images/harshad.jpeg"
                alt="Harshad U. Phirangi - Co-Founder"
                className="w-full h-full object-contain object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white pointer-events-none">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Co-Founder</p>
                <h3 className="text-2xl font-bold text-white">Harshad .U. Phirangi</h3>
              </div>
            </div>
            <div className="p-6 text-gray-600 text-sm leading-relaxed flex-1">
              A dynamic entrepreneur and educator, Harshad brings modern teaching frameworks, digital learning techniques, and creative energy to Mind Power Academy, propelling student confidence and holistic development.
            </div>
          </motion.div>
        </div>

        {/* Link to About Us Page */}
        <div className="text-center mt-12">
          <Link
            to="/about-us/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-primary text-white hover:bg-blue-700 shadow-md transition-all uppercase tracking-wider"
          >
            <span>Learn More About Us</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
