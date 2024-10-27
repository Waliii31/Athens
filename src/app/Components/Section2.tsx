"use client"
import React, { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import art1 from '../Images/asset 2.jpeg'
import art2 from '../Images/asset 3.jpeg'
import art3 from '../Images/asset 4.jpeg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
    const containerRef = useRef(null);
    const picARef = useRef(null);
    const picBRef = useRef(null);
    const picCRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            [picARef, picBRef, picCRef].forEach((ref: React.RefObject<HTMLDivElement>) => {
                if (ref.current && ref.current.parentElement) {
                    gsap.to(ref.current, {
                        y: "-30%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: ref.current.parentElement,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <div className='container-fluid' ref={containerRef}>
            <p className='w-full md:w-[36%] text-[4vw] md:text-[1.2vw] font-medium leading-[1.2] md:leading-[1.4vw] my-5 md:my-10 text-center md:text-left'>
                We&apos;re your trusted partner in the world of art. Immerse yourself in the fusion of modern art and design. Every piece tells a story, transforming spaces into experiences. Our dedicated team of art consultants is here to guide you through every step of your artistic journey.
            </p>
            <div className='flex flex-col md:flex-row w-full justify-around items-center md:items-end my-10 md:my-20 gap-10'>
                <div className='w-[60vw] h-[83.63vw] md:w-[14.58vw] md:h-[20.31vw] overflow-hidden'>
                    <div ref={picARef} className='h-[120%] w-full'>
                        <Image className='h-full w-full object-cover' src={art1} alt='art' />
                    </div>
                </div>
                <div className='w-[60vw] h-[83.63vw] md:w-[20.83vw] md:h-[29.07vw] overflow-hidden'>
                    <div ref={picBRef} className='h-[120%] w-full'>
                        <Image className='h-full w-full object-cover' src={art2} alt='art' />
                    </div>
                </div>
                <div className='w-[60vw] h-[83.63vw] md:w-[14.58vw] md:h-[20.31vw] overflow-hidden'>
                    <div ref={picCRef} className='h-[120%] w-full'>
                        <Image className='h-full w-full object-cover' src={art3} alt='art' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
