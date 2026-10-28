export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-14 shadow-md border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Disclaimer</h1>
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
