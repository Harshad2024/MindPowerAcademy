import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCheck, FiArrowRight, FiPhone } from 'react-icons/fi';

const COURSES = [
  {
    id: 'handwriting',
    badge: 'Transform Your Life',
    title: 'Handwriting Improvement Course',
    tagline: 'Transform Your Handwriting, Transform Your Life!',
    desc: 'Unlock the secrets to writing with speed, elegance, and clarity. Our Handwriting Improvement Course is designed to enhance your writing style, boost your confidence, and leave a lasting impression. Whether it is school, work, or personal communication, master the art of beautiful handwriting.',
    img: '/images/handwriting-improvement-course.png',
    types: ['Simple Handwriting', 'Cursive Handwriting', 'Running Handwriting'],
    enrollText: 'Enroll Now and take the first step toward a better you!',
    subTracks: [
      {
        title: 'Simple Handwriting Course',
        motto: '"Write Clearly, Impress Instantly!"',
        text: 'Simple handwriting is the foundation of effective communication. Learn how to form letters with clarity, precision, and simplicity. Perfect for students, professionals, and anyone looking to enhance their writing basics.',
        cta: 'Join Now to make every word stand out!',
      },
      {
        title: 'Cursive Handwriting Course',
        motto: '"Flowing Elegance in Every Stroke!"',
        text: 'Cursive handwriting is more than just writing—it is an art. This course teaches you how to write beautifully in a continuous, flowing style, enhancing speed, coordination, and aesthetic appeal.',
        cta: 'Enroll Today and make your words graceful and captivating!',
      },
      {
        title: 'Running Handwriting Course',
        motto: '"Master the Speed of Thought with Running Handwriting!"',
        text: 'Running handwriting combines speed and legibility, making it ideal for note-taking, exams, and professional use. Learn how to write quickly without compromising clarity.',
        cta: 'Sign Up Now to write faster and smarter!',
      },
    ],
  },
  {
    id: 'calligraphy',
    badge: 'Art in Every Stroke',
    title: 'Calligraphy Course',
    tagline: 'Art in Every Stroke – Master the Elegance of Calligraphy!',
    desc: 'Dive into the mesmerizing world of artistic lettering. Our Calligraphy Course offers step-by-step guidance to help you create stunning designs and professional-quality scripts. Perfect for beginners and enthusiasts looking to make their mark in this timeless art.',
    img: '/images/calligraphy.png',
    types: ['Foundational Lettering', 'Brush & Dip Pen Strokes', 'Artistic Flourishes & Compositions'],
    enrollText: 'Secure Your Spot Today and make your writing a masterpiece!',
  },
  {
    id: 'graphology',
    badge: 'Handwriting Analysis',
    title: 'Graphology Course',
    tagline: 'Discover the Power of Handwriting Analysis!',
    desc: 'Learn how to decode personalities, behaviors, and emotions through handwriting. Our Graphology Course empowers you with skills to understand and analyze the hidden messages in strokes and curves. Ideal for psychology enthusiasts, HR professionals, and curious minds.',
    img: '/images/Graphology-course.png',
    types: ['Stroke & Slant Analysis', 'Subconscious Trait Profiling', 'Emotional & Behavior Assessment'],
    enrollText: 'Join the Journey of Discovery – Register Now!',
  },
  {
    id: 'memory-skills',
    badge: 'Master Memory Skills',
    title: 'Memory Skills Course',
    tagline: 'Supercharge Your Brainpower – Master Memory Skills!',
    desc: 'Struggling to remember important details? Learn proven techniques to enhance your memory, retain information effortlessly, and achieve academic or professional success. Our Memory Skills Course is your gateway to sharper thinking and better results.',
    img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80',
    types: ['Mnemonic Memory Systems', 'Mind Mapping & Visual Association', 'Instant Recall Techniques for Exams'],
    enrollText: 'Join the Journey of Discovery – Register Now!',
  },
  {
    id: 'pendulum-dowsing',
    badge: 'Find Your Inner Guide',
    title: 'Pendulum Dowsing Course',
    tagline: 'Find Your Inner Guide with Pendulum Dowsing!',
    desc: 'Discover the ancient art of dowsing to unlock answers, energy, and balance in your life. Our Pendulum Dowsing Course provides hands-on training to develop your intuitive skills and achieve clarity in decision-making.',
    img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    types: ['Pendulum Calibration & Micro-Movements', 'Intuitive Energy Alignment', 'Decision-Making & Clarity Practice'],
    enrollText: 'Register Now and let your intuition lead the way!',
  },
  {
    id: 'english-grammar',
    badge: 'Speak Fluently',
    title: 'English Grammar Course',
    tagline: 'Speak Fluently, Write Accurately, Communicate with Confidence!',
    desc: 'Master English Grammar with our expert-guided classes designed for every level. From beginners to advanced learners, we offer tailored programs to help you speak fluently, write error-free sentences, and boost your communication skills.',
    img: '/images/english-grammer-course.png',
    types: ['Basic Grammar (Parts of Speech, Tenses)', 'Advanced Grammar (Complex Structures, Voice & Clauses)', 'Spoken Fluency & Vocabulary Drills'],
    enrollText: 'Join now and transform your language skills today!',
    subTracks: [
      {
        title: 'Basic Grammar',
        motto: '"Master the Foundation of English!"',
        text: 'Our Basic Grammar course is perfect for beginners and those looking to strengthen their fundamentals. Understand the building blocks of English: nouns, verbs, tenses, and more to create clear sentences effortlessly.',
        cta: 'Start your journey today and build a strong foundation in English!',
      },
      {
        title: 'Advanced Grammar',
        motto: '"Take Your English to the Next Level!"',
        text: 'Dive deep into the intricacies of English with our Advanced Grammar course. Perfect for professionals, students, and enthusiasts aiming for mastery in complex structures, polished writing, and persuasive communication.',
        cta: 'Elevate your English today – enroll in our Advanced Grammar program!',
      },
    ],
  },
  {
    id: 'personality-development',
    badge: 'Personality',
    title: 'Personality Development Course',
    tagline: 'Unleash the Best Version of Yourself!',
    desc: 'Stand out in any room and shine with confidence. Our Personality Development Course focuses on communication skills, body language, and self-awareness, ensuring you make a lasting impression wherever you go.',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    types: ['Overcoming Stage Fear & Hesitation', 'Commanding Body Language & Grooming', 'Public Speaking & Interpersonal Skills'],
    enrollText: 'Take the Leap – Join Now to redefine yourself!',
  },
  {
    id: 'quantum-healing',
    badge: 'Find Your Inner Guide',
    title: 'Quantum Healing Course',
    tagline: 'Harness Energy, Heal Holistically!',
    desc: 'Explore the transformative power of Quantum Healing to promote wellness, reduce stress, and align your energy. This course combines science and spirituality to help you unlock a deeper sense of purpose and health.',
    img: '/images/quantum-healing-course.png',
    types: ['Holistic Energy Alignment', 'Stress Release & Mind Harmonization', 'Vitality & Mind-Body Health Practices'],
    enrollText: 'Sign Up Today to embrace a life of balance and vitality!',
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 1. Page Banner */}
      <section className="relative overflow-hidden py-20 md:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/page-banner.jpg"
            alt="Mind Power Academy Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#034ea2]/90 via-[#046bd2]/85 to-[#0b2560]/90" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            Transformative Curriculum
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Explore <span className="underline decoration-white/40">Our Courses</span>
          </h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-base md:text-lg">
            Explore our expert-led courses and start your journey today! Choose the course that fits your goals and unlock your true potential.
          </p>
        </div>
      </section>

      {/* 2. Main Course Rows matching official layout */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 space-y-16">
        {COURSES.map((course, idx) => (
          <div key={course.id} className="space-y-6">
            {/* Primary Course Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-10">
                {/* Course Image */}
                <div className={`lg:col-span-5 relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                      {course.badge}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    {course.title}
                  </h2>
                  <p className="text-primary font-semibold text-sm md:text-base mt-1.5 mb-3">
                    "{course.tagline}"
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {course.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {course.types.map((type) => (
                      <span
                        key={type}
                        className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-900 border border-blue-200/60 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                      >
                        <FiCheck className="text-primary text-sm shrink-0" />
                        <span>{type}</span>
                      </span>
                    ))}
                  </div>

                  {course.enrollText && (
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">
                      {course.enrollText}
                    </p>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 items-center">
                    <Link
                      to="/contact-us/"
                      className="px-6 py-3 rounded-full font-bold text-sm bg-primary hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all"
                    >
                      Register Now
                    </Link>
                    <a
                      href={`https://wa.me/919844856288?text=Hello!%20I%20am%20interested%20in%20enrolling%20in%20the%20${encodeURIComponent(
                        course.title
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-full font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center gap-2 shadow-md transition-all"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sub-Tracks (e.g. Simple, Cursive, Running or Basic, Advanced) */}
            {course.subTracks && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {course.subTracks.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white rounded-2xl p-6 border border-blue-100 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{sub.title}</h3>
                      <p className="text-primary text-xs font-semibold mb-3">{sub.motto}</p>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                        {sub.text}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 mb-3">{sub.cta}</p>
                      <Link
                        to="/contact-us/"
                        className="inline-block w-full text-center py-2 px-4 rounded-xl bg-blue-50 hover:bg-primary hover:text-white text-primary text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* 3. Bottom CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
                Need Guidance?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Not sure which course is right for you?
              </h2>
              <p className="text-blue-100 mt-2 text-sm md:text-base">
                Call our expert mentors directly for free counseling and personalised batch timings.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:+919844856288"
                className="px-6 py-3.5 rounded-full font-bold text-sm bg-white text-blue-800 hover:bg-blue-50 shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <FiPhone />
                <span>+91 98448 56288</span>
              </a>
              <Link
                to="/contact-us/"
                className="px-6 py-3.5 rounded-full font-bold text-sm bg-blue-900/60 hover:bg-blue-950 border border-white/30 text-white shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <span>Contact Us</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
