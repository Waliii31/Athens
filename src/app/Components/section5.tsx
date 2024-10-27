'use client'
import { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // Animation starts when the top of the container hits the bottom of the viewport
        end: "bottom top", // Animation ends when the bottom of the container leaves the top of the viewport
        toggleActions: "play pause resume pause",
      }
    });

    tl.fromTo(
      textRef.current,
      { x: "0%" },
      {
        x: "-100%",
        ease: "linear",
        duration: 800,
        repeat: -1
      }
    );

    return () => {
      // Clean up the ScrollTrigger when the component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className='w-full min-h-screen flex justify-center items-center'>
      <div className='w-full flex justify-center items-center h-[50vh] md:h-[60vh] lg:h-[70vh] bg-black overflow-hidden'>
        <div ref={textRef} className='flex whitespace-nowrap'>
          {Array.from({ length: 100 }).map((_, index) => (
            <h1 key={index} className='text-white text-[18vw] md:text-[15vw] lg:text-[18vw] font-normal mx-2 md:mx-4 lg:mx-6'>
              <span className='text-pink-500'>ATHENS</span> PARIS
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section5;
