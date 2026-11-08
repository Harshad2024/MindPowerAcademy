import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward, FiUsers, FiBookOpen, FiStar } from 'react-icons/fi';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import Seo from '../components/common/Seo';

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
      <Seo
        title="About Us"
        description="Learn about Mind Power Academy, its founder Umesh S. Phirangi, and two decades of handwriting and personality development training in Hubballi."
        path="/about-us"
      />
      {/* Page Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#071330] via-[#0B2560] to-[#0D1F4D] py-14 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Journey & Vision
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">About Us</h1>
          <p className="mt-3 sm:mt-4 text-blue-100 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Empowering Minds, Shaping Futures: Dedicated to unlocking the true potential within every individual.
          </p>
        </div>
      </section>

      {/* Founder & Mission Section */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Founder Photo Column */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2.5 sm:p-3">
              <img
                src="/images/umesh-p.png"
                alt="Founder Umesh S. Phirangi"
                className="w-full h-auto max-h-[480px] object-cover object-top rounded-2xl"
              />
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-7">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">About Founder</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4 sm:mb-6">
              Umesh .S. Phirangi
            </h2>
            <div className="space-y-3.5 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
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

            <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary text-lg sm:text-xl shrink-0" />
                  <span className="text-gray-800 font-medium text-xs sm:text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founder Section */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Details Column — on left for desktop (reversed order) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">About Co-Founder</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4 sm:mb-6">
              Harshad .U. Phirangi
            </h2>
            <div className="space-y-3.5 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                As the Co-Founder of Mind Power Academy, <strong>Harshad U. Phirangi</strong> plays a pivotal role in shaping the vision and mission of the academy. Passionate about empowering individuals, Harshad brings innovative ideas and strategies to ensure the success of every program.
              </p>
              <p>
                With a deep commitment to personal growth and excellence, he works alongside the team to create a transformative learning environment. His dedication to quality training and student outcomes has been instrumental in growing Mind Power Academy's reach across Karnataka and beyond.
              </p>
            </div>
          </div>

          {/* Co-Founder Photo Column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2.5 sm:p-3">
              <img
                src="/images/harshad-p.jpeg"
                alt="Co-Founder Harshad U. Phirangi"
                className="w-full h-auto max-h-[480px] object-cover object-top rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section id="gallery" className="py-12 sm:py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Our Media</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Our YouTube Videos & Workshops
            </h2>
            <p className="text-gray-500 mt-2 text-xs sm:text-sm max-w-2xl mx-auto">
              Watch snippets of our students' transformations, handwriting workshops, and live sessions directly from our official channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                id: 'Vp7FU2YNVnc',
                title: 'Handwriting & Memory Transformation Session',
                url: 'https://youtu.be/Vp7FU2YNVnc',
              },
              {
                id: 'R1wRZmbScpA',
                title: 'Students Workshop & Live Practical Training',
                url: 'https://youtu.be/R1wRZmbScpA',
              },
              {
                id: '4gVS5Pl8EHM',
                title: 'Mind Power & Personality Growth Highlights',
                url: 'https://youtu.be/4gVS5Pl8EHM',
              },
            ].map((video) => (
              <div
                key={video.id}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col"
              >
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2">
                    {video.title}
                  </h3>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    Watch on YouTube &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
