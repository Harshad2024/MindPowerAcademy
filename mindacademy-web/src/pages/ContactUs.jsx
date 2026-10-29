import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiHelpCircle,
  FiMessageSquare,
  FiSmartphone,
} from 'react-icons/fi';
import { FaHeadset, FaBookReader, FaLightbulb } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// ──────────────────────────────────────────────
// 🔧 EmailJS Service Configuration (Free tier)
// Replace with your keys at https://www.emailjs.com
// ──────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_mindpower';
const EMAILJS_TEMPLATE_ID = 'template_mindpower';
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

const COURSE_OPTIONS = [
  'Select Course',
  'Personality Development',
  'Handwriting Improvement',
  'English Grammar',
  'Calligraphy Course',
  'Graphology',
  'Memory Skills',
  'Pendulum Dowsing',
  'Quantum Healing',
  'Customized Workshop',
];

const FAQS = [
  {
    q: 'What types of courses does Mind Power Academy offer?',
    a: 'We offer a variety of courses, including Personality Development, Handwriting Improvement, Calligraphy, Graphology, Memory Skills, Pendulum Dowsing, and Quantum Healing. These courses are designed to enhance skills, boost confidence, and promote holistic growth.',
  },
  {
    q: 'Are the courses available online or in-person?',
    a: 'We provide flexible learning options, including both interactive online batches and hands-on in-person sessions at our Hubballi academy to accommodate all learners.',
  },
  {
    q: 'Can parents also attend the sessions?',
    a: 'Yes, parents are strongly encouraged to join orientation sessions and workshops to better support their children’s development journey.',
  },
  {
    q: 'Who can enroll in the courses?',
    a: 'Our courses are suitable for school students, college attendees, competitive exam aspirants, working professionals, teachers, and adults looking to improve communication and handwriting.',
  },
  {
    q: 'How can I enroll in a course?',
    a: 'You can submit the enquiry form below, call our helpline directly at +91 98448 56288, or send us a WhatsApp message to book your seat immediately.',
  },
];

export default function ContactUs() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'Select Course',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and contact number.');
      return;
    }

    setStatus('loading');

    try {
      if (
        EMAILJS_PUBLIC_KEY &&
        EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY'
      ) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            name: formData.name,
            phone: formData.phone,
            course: formData.course,
            message: formData.message || 'No additional message provided',
          },
          EMAILJS_PUBLIC_KEY
        );
      } else {
        // Mock success fallback for preview
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        course: 'Select Course',
        message: '',
      });
    } catch (err) {
      console.error('Email error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* ──────────────────────────────────────────────
          1. Hero Banner: Dark Blue with Glow Icons
      ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#071330] via-[#0B2560] to-[#0D1F4D] py-20 md:py-28 text-white">
        {/* Subtle cyber background grid / glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-blue-100 max-w-xl text-base md:text-lg">
              Have questions about our programs or ready to enroll? Reach out to us
              directly or visit our academy. We are always ready to assist you!
            </p>
          </div>

          {/* Glowing Neon Outline Graphic */}
          <div className="flex items-center gap-6 p-6 rounded-3xl bg-blue-950/40 border border-blue-400/20 backdrop-blur-sm shadow-2xl">
            <div className="p-4 rounded-2xl bg-blue-600/30 border border-blue-400/40 text-cyan-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
              <FiMail className="text-4xl md:text-5xl" />
            </div>
            <div className="p-4 rounded-2xl bg-blue-600/30 border border-blue-400/40 text-blue-300 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
              <FiSmartphone className="text-4xl md:text-5xl" />
            </div>
            <div className="p-4 rounded-2xl bg-blue-600/30 border border-blue-400/40 text-indigo-300 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]">
              <FiMessageSquare className="text-4xl md:text-5xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          2. "Got a Question?" 3 Blue Info Cards
      ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Got a <span className="text-primary">Question?</span>
          </h2>
          <p className="text-gray-500 mt-2 text-base">
            Reach out via phone, email, or visit our academy center in Hubballi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Phone */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="bg-[#2563EB] text-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl mb-5 border border-white/20">
              <FaHeadset />
            </div>
            <h3 className="text-xl font-bold mb-4">Phone Number</h3>
            <div className="space-y-2 text-blue-50 font-medium text-lg">
              <div>
                <a
                  href="tel:+919844856288"
                  className="hover:text-white underline underline-offset-4 transition-colors"
                >
                  +91 98448 56288
                </a>
              </div>
              <div>
                <a
                  href="tel:+919482779529"
                  className="hover:text-white underline underline-offset-4 transition-colors"
                >
                  +91 94827 79529
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Address */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="bg-[#2563EB] text-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl mb-5 border border-white/20">
              <FaBookReader />
            </div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="text-blue-50 font-medium text-base leading-relaxed">
              No 92, Lokappana Hakkal, near Hanuman Temple, Rajnagar, Vidya Nagar,
              Hubballi, Karnataka 580031
            </p>
          </motion.div>

          {/* Card 3: Email */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="bg-[#2563EB] text-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl mb-5 border border-white/20">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold mb-4">Email Address</h3>
            <a
              href="mailto:mindpoweracademy77@gmail.com"
              className="text-blue-50 hover:text-white font-medium text-base break-all underline underline-offset-4 transition-colors"
            >
              mindpoweracademy77@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. "Send us a Message" Form + Google Maps
      ────────────────────────────────────────────── */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Form Column */}
          <div className="lg:col-span-6 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              Send us a <span className="text-primary">Message</span>
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill in your details below and our team will get in touch with you shortly.
            </p>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800 flex items-center gap-3">
                <FiCheckCircle className="text-2xl text-green-600 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Thank You for Your Enquiry!</p>
                  <p className="text-xs text-green-700">
                    We have received your message and will contact you promptly.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-center gap-3">
                <FiAlertCircle className="text-2xl text-red-600 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Submission Error</p>
                  <p className="text-xs text-red-700">
                    Could not submit the form. Please call us directly at +91 98448 56288.
                  </p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact Number *"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                />
              </div>

              <div>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                >
                  {COURSE_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any specific questions or preferred batch timing? (Optional)"
                  className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-primary hover:from-blue-700 hover:to-blue-900 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <FiSend />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-6 relative min-h-[380px] bg-slate-100 flex flex-col">
            <iframe
              title="Mind Power Academy Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.458284561875!2d75.1226!3d15.3647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d73a87654321%3A0xabcdef1234567890!2sMind%20Power%20Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Quick location info footer below map */}
            <div className="p-4 bg-slate-900 text-white text-xs flex justify-between items-center">
              <span className="font-medium">
                📍 Vidya Nagar, Rajnagar, Hubballi, Karnataka 580031
              </span>
              <a
                href="https://maps.google.com/?q=Mind+Power+Academy+Hubballi"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. Frequently Asked Questions Accordion
      ────────────────────────────────────────────── */}
      <section className="py-12 pb-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left font-semibold text-gray-800 flex justify-between items-center bg-gray-50/70 hover:bg-gray-100 transition-colors text-sm md:text-base"
                >
                  <span>{faq.q}</span>
                  <span className="text-primary text-lg">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="p-5 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
