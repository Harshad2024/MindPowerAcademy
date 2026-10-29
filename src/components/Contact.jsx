import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// ──────────────────────────────────────────────
// 🔧 Replace these with your actual EmailJS IDs
// (free at https://www.emailjs.com)
// ──────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_XXXXXXX';
const EMAILJS_TEMPLATE_ID = 'template_XXXXXXX';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', phone: '', course: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const info = [
    { icon: <FiPhone />, label: 'Phone', value: '+91 98448 56288', href: 'tel:+919844856288' },
    { icon: <FiMail />, label: 'Email', value: 'mindpoweracademy77@gmail.com', href: 'mailto:mindpoweracademy77@gmail.com' },
    { icon: <FiMapPin />, label: 'Location', value: 'Bengaluru, Karnataka, India', href: 'https://maps.google.com/?q=Mind+Power+Academy+Bengaluru' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions? Ready to enroll? Reach out to us and we'll get back to you shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {info.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'Location' ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="bg-primary text-white rounded-full p-3 group-hover:bg-primary-dark transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{item.label}</p>
                  <p className="text-navy font-semibold mt-0.5">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-56">
              <iframe
                title="Mind Power Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9976001089!2d77.35074171445794!3d12.95428700002549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Send us a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Course Interested In</label>
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white text-gray-600"
                  >
                    <option value="">Select a course</option>
                    <option>Handwriting Improvement</option>
                    <option>Calligraphy Course</option>
                    <option>Graphology Course</option>
                    <option>Memory Skill Course</option>
                    <option>Pendulum Dowsing</option>
                    <option>English Grammar Course</option>
                    <option>Personality Development</option>
                    <option>Quantum Healing Course</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <FiSend />
                )}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 rounded-xl p-3 text-sm">
                  <FiCheckCircle /> Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-xl p-3 text-sm">
                  <FiAlertCircle /> Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
