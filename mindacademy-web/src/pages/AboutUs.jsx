import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward, FiUsers, FiBookOpen, FiStar } from 'react-icons/fi';
import ImagePlaceholder from '../components/common/ImagePlaceholder';

export default function AboutUs() {
  const highlights = [
    '20+ Years of Dedication to Student Development',
    'Scientifically Proven Handwriting Improvement Methods',
    'Comprehensive Personality Development & Public Speaking',
    'Holistic Mind Power, Graphology & Memory Techniques',
    '15,000+ Students Trained Across Karnataka and Beyond',
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Page Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#071330] via-[#0B2560] to-[#0D1F4D] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Journey & Vision
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">About Us</h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-base md:text-lg">
            Empowering Minds, Shaping Futures: Dedicated to unlocking the true potential within every individual.
          </p>
        </div>
      </section>

      {/* Founder & Mission Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photos / Assets Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-3">
              <img
                src="/images/founder.jpg"
                alt="Founder Umesh S. Phirangi"
                className="w-full h-80 object-cover rounded-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }}>
                <ImagePlaceholder
                  title="Founder Photo: Umesh S. Phirangi"
                  subtitle="Image to be uploaded"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-3">
              <img
                src="/images/classroom.jpg"
                alt="Academy Workshop Sessions"
                className="w-full h-60 object-cover rounded-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }}>
                <ImagePlaceholder
                  title="Academy Classroom & Workshop Session"
                  subtitle="Image to be uploaded"
                  aspectRatio="aspect-video"
                />
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-7">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">About Founder</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              Umesh .S. Phirangi
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                At <strong>Mind Power Academy</strong>, we believe that every mind holds the key to a brighter and more fulfilling future. Founded by <strong>Umesh S. Phirangi</strong>, our academy is built on the vision of empowering individuals to achieve personal and professional excellence.
              </p>
              <p>
                With decades of passionate mentorship, we specialize in transformative training modules — from scientific Handwriting Improvement and Calligraphy to advanced Personality Development, Memory Skills, Graphology, and Holistic Well-Being.
              </p>
              <p>
                Whether you are a young student striving for academic confidence, a parent wanting the best for your child, or a professional aiming to communicate with authority, our courses are tailored to create lasting impact.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary text-xl shrink-0" />
                  <span className="text-gray-800 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section with Placeholder */}
      <section id="gallery" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Our Media</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Our YouTube Videos & Workshops
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Watch snippets of our students' transformations, handwriting workshops, and live sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImagePlaceholder
              title="YouTube Workshop Video 1"
              subtitle="Video link / asset to be uploaded"
              aspectRatio="aspect-video"
            />
            <ImagePlaceholder
              title="YouTube Workshop Video 2"
              subtitle="Video link / asset to be uploaded"
              aspectRatio="aspect-video"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
