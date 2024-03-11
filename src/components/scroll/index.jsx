import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true, // Adjust as needed
      },
    });

    tl.to('.year', {
      opacity: 1,
      stagger: 0.5, // Adjust as needed
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={timelineRef}>
      <div className="year" style={{ opacity: 0 }}>2021</div>
      <div className="year" style={{ opacity: 0 }}>2022</div>
      <div className="year" style={{ opacity: 0 }}>2023</div>
    </div>
  );
};

export default Journey;
