import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: 'What types of courses does Mind Power Academy offer?',
    a: 'We offer a variety of courses, including Personality Development, Handwriting Improvement, Calligraphy, Graphology, Memory Skills, Pendulum Dowsing, and Quantum Healing. These courses are designed to enhance skills, boost confidence, and promote holistic growth.',
  },
  {
    q: 'Are the courses available online or in-person?',
    a: 'We offer both online and in-person sessions to accommodate different learning preferences. Please contact us to know the current availability for each course.',
  },
  {
    q: 'Can parents also attend the sessions?',
    a: 'Yes, parents are welcome to observe sessions. We believe in a collaborative learning environment that involves parents in their child\'s development journey.',
  },
  {
    q: 'Who can enroll in the courses?',
    a: 'Our courses are open to all age groups — children, teenagers, adults, and senior professionals. We customize our teaching approach to suit each age group.',
  },
  {
    q: 'How can I enroll in a course?',
    a: 'You can enroll by filling out the contact form on our website, calling us at +91 98448 56288, or emailing us at mindpoweracademy77@gmail.com.',
  },
  {
    q: 'What are the payment options available?',
    a: 'We accept various payment modes including cash, bank transfer, UPI, and online payments. Please contact us for the fee structure of each course.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left flex justify-between items-center px-5 py-4 font-semibold text-sm md:text-base transition-colors ${open ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-blue-50'}`}
      >
        {faq.q}
        <FiChevronDown className={`flex-shrink-0 ml-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 py-4 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-100">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-white/80">Everything you need to know before enrolling.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>
  );
}
