import { useRef, createContext, useEffect } from "react";
import GSAP from "gsap";
import Lenis from "lenis";

export const LenisScrollContext = createContext<React.RefObject<Lenis> | null>(null);

interface Props extends React.PropsWithChildren {}

export default function LenisScrollProvider({ children }: Props) {
  const _lenis = useRef<Lenis>(null!);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      touchMultiplier: 1,
      autoResize: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    _lenis.current = lenis;

    GSAP.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });

    GSAP.ticker.lagSmoothing(0);

    requestAnimationFrame(raf);

    return () => {
      _lenis.current?.destroy();
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!_lenis.current) return;
    // _lenis.current.stop();
    _lenis.current.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <LenisScrollContext.Provider value={_lenis}>
      {children}
    </LenisScrollContext.Provider>
  );
}
