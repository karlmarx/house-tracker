import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function PhotoGallery({ photos }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { darkMode } = useApp();
  const isOpen = lightboxIndex !== null;

  const goNext = useCallback(() => {
    setLightboxIndex(i => (i + 1) % photos.length);
  }, [photos.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex(i => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('lightbox-open');

    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, goNext, goPrev]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <button
            onClick={e => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 md:left-4 text-white/70 hover:text-white p-2 z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={e => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 md:right-4 text-white/70 hover:text-white p-2 z-10"
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] mx-4 flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].caption}
              className="max-h-[80vh] max-w-full object-contain rounded-lg"
            />
            <p className="text-white/80 text-sm mt-3 text-center px-4">
              {photos[lightboxIndex].caption}
              <span className="text-white/40 ml-2">
                {lightboxIndex + 1} / {photos.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
