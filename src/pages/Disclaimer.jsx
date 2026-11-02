import Seo from '../components/common/Seo';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16 px-4 sm:px-6 font-sans">
      <Seo
        title="Disclaimer"
        description="Disclaimer regarding the information, courses and results presented on the Mind Power Academy website."
        path="/disclaimer"
      />
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-8 md:p-14 shadow-md border border-gray-100">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">Disclaimer</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: December 03, 2024</p>
        <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
          <p>
            The information and training provided on this website and during our workshops are for educational, self-improvement, and personal development purposes.
          </p>
          <p>
            Individual results in handwriting speed, neatness, public speaking, and confidence vary depending on student dedication, practice regularity, and application of techniques.
          </p>
          <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
          <p>
            For any clarifications, please reach out to{' '}
            <a href="mailto:mindpoweracademy77@gmail.com" className="text-primary font-semibold underline">
              mindpoweracademy77@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
