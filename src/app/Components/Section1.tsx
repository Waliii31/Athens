"use client"
import React, { useRef, useMemo } from 'react'
import Image from 'next/image'
import BigImage from '../Images/asset 0.jpeg'
import TextbgImage from '../Images/asset 6.jpeg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef(null);
  const bigImageRef = useRef(null);
  const textFirstRef = useRef<HTMLHeadingElement>(null);
  const textbgImageRef = useRef(null);
  const textSecondRef = useRef<HTMLHeadingElement>(null);

  // Define words here
  const words = useMemo(() => "Selling Modern Artworks & Sculptures".split(/\s+/), []);

  useGSAP(() => {
    // Animation for paraRef
    gsap.from(paraRef.current, {
      x: -100,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: paraRef.current,
        start: 'top center',
        end: 'bottom center',
      },
    });

    // Animation for bigImageRef
    gsap.from(bigImageRef.current, {
      borderRadius: "100%",
      scale: 0,
      duration: 4,
      scrollTrigger: {
        trigger: bigImageRef.current,
        start: 'top 90%',
        end: 'bottom 40%',
        scrub: true,
      },
    });

    // Animation for textFirstRef
    if (textFirstRef.current) {
      gsap.from(textFirstRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: textFirstRef.current,
          start: 'top 90%',
          end: 'bottom center',
        },
      });
    }

    // Animation for textSecondRef
    if (textSecondRef.current) {
      gsap.from(textSecondRef.current.children, {
        opacity: 0,
        y: 500,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textSecondRef.current,
          start: 'top 80%',
          end: 'bottom center',
        },
      });
    }

    gsap.to(textbgImageRef.current, {
      y: -300,
      duration: 1,
      scrollTrigger: {
        trigger: textbgImageRef.current,
        start: 'top 90%',
        end: 'bottom 30%',
        scrub: true,
      },
    });
  }, { scope: containerRef, dependencies: [] });

  return (
    <div ref={containerRef} className='container-fluid overflow-x-hidden w-full flex flex-col justify-center items-center py-10'>
      <div className='w-full overflow-x-hidden para text-left font-semibold my-5 px-4 sm:px-0'>
        <p ref={paraRef} className='text-base sm:text-lg md:text-xl'>
          your premier destination for <br className="hidden sm:block" /> 
          personalized art experiences and <br className="hidden sm:block" /> 
          exquisite modern art and sculptures.
        </p>
      </div>
      <div className='w-full h-auto sm:h-[43vw] flex justify-center items-center relative'>
        <Image 
          ref={bigImageRef} 
          className='w-full sm:w-[43vw] h-auto object-cover' 
          src={BigImage} 
          alt='Big artwork image'
        />
      </div>
      <div className='text-center overflow-y-hidden w-full mt-[-5vw] sm:mt-[-2vw] relative'>
        {/* Image behind the text */}
        <Image 
          ref={textbgImageRef} 
          className='absolute w-[20vw] sm:w-[10vw] bottom-[0%] left-[15%] sm:left-[25%] z-0' 
          src={TextbgImage} 
          alt='Background texture'
        />
        
        {/* Text with higher z-index */}
        <h1 ref={textFirstRef} className='text-[12vw] sm:text-[8vw] uppercase font-bold leading-[11vw] sm:leading-[7.5vw] z-10'>
          THE ART <br /> CONCIERGE
        </h1>
        <h1 ref={textSecondRef} className='text-[10vw] sm:text-[8vw] uppercase font-bold leading-[9.5vw] sm:leading-[7.5vw] z-50'>
          {words.map((word, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' '}
              <span>{word}</span>
              {index === 1 && <br />}
              {index === 3 && <br className="hidden sm:block" />}
            </React.Fragment>
          ))}
        </h1>
      </div>
    </div>
  )
}

export default Section1
