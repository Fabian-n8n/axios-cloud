import { useEffect } from 'react';

export function useNavScroll(ref, threshold = 40) {
  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > threshold) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, threshold]);
}
