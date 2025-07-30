import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 bg-neutral-600 text-white/40 text-xs px-5 py-2 rounded-md shadow-md transition-all duration-300 max-sm:hidden
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
      `}
    >
      Back to Top
    </button>
  );
}
