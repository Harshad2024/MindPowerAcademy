import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiBookOpen, FiStar } from 'react-icons/fi';

const features = [
  {
    icon: <FiBookOpen size={32} className="text-primary" />,
    title: 'Holistic development approach.',
    desc: 'We focus on the complete development of every student — mind, body, and spirit.',
  },
  {
    icon: <FiUsers size={32} className="text-primary" />,
    title: 'Experienced trainers and proven methods.',
    desc: 'Our certified trainers bring decades of expertise and scientifically proven techniques.',
  },
  {
    icon: <FiAward size={32} className="text-primary" />,
    title: 'Customized Course for all age groups.',
    desc: 'Programs tailored for kids, teens, adults and senior professionals alike.',
  },
  {
    icon: <FiStar size={32} className="text-primary" />,
    title: 'Transformative techniques for success and wellness.',
    desc: 'Practical, life-changing strategies you can apply immediately in the real world.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Why Choose Us?
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 md:mt-0 border-2 border-white text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white hover:text-primary transition-all"
          >
            VIEW MORE
          </motion.button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center card-hover"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 rounded-full p-4">
                  {f.icon}
                </div>
              </div>
              <h3 className="font-bold text-navy text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
