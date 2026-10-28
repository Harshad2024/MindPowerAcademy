import { FiImage } from 'react-icons/fi';

export default function ImagePlaceholder({
  title = 'Image to be uploaded',
  subtitle = 'Asset will be added here',
  className = '',
  aspectRatio = 'aspect-video',
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 flex flex-col items-center justify-center p-6 text-center ${aspectRatio} ${className}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-3">
        <FiImage size={28} className="opacity-80" />
      </div>
      <p className="text-sm font-semibold text-gray-700">{title}</p>
      <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
      <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-700 text-[11px] font-medium rounded-full">
        Pending Asset
      </span>
    </div>
  );
}
