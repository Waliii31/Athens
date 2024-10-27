'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import artist2 from '../Images/2.png'
import artist3 from '../Images/3.png'
import artist4 from '../Images/4.png'
import artist5 from '../Images/5.png'
import artist6 from '../Images/6.png'
import artist7 from '../Images/7.png'
import artist8 from '../Images/8.png'

const Section4: React.FC = () => {
    const artistInfo = [
        {
            Image: artist2,
            name: "Nikolaos Schizas",
            role: "abstract artist",
            align: "end"
        },
        {
            Image: artist3,
            name: "Sylvestre Gauvrit",
            role: "abstract artist",
            align: "start"
        },
        {
            Image: artist4,
            name: "Jane Puylagarde",
            role: "abstract artist",
            align: "end"
        },
        {
            Image: artist5,
            name: "Martin Berger",
            role: "abstract artist",
            align: "start"
        },
        {
            Image: artist6,
            name: "Kiko Lopez",
            role: "abstract artist",
            align: "end"
        },
        {
            Image: artist7,
            name: "Annalù",
            role: "abstract artist",
            align: "start"
        },
        {
            Image: artist8,
            name: "Julian Arnaud",
            role: "abstract artist",
            align: "end"
        }
    ];
    
    const [isFixed, setIsFixed] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const isSmallScreen = window.innerWidth <= 700;

            if (sectionRef.current && contentRef.current && !isSmallScreen) {
                const sectionRect = sectionRef.current.getBoundingClientRect();
                const contentRect = contentRef.current.getBoundingClientRect();
                const sectionBottom = sectionRect.bottom;
                const contentHeight = contentRect.height;

                if (sectionRect.top <= 0 && sectionBottom > contentHeight) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                }
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div ref={sectionRef} className="section-container mb-10">
            <div 
                ref={contentRef}
                className={`w-full flex floating-heading justify-between items-center p-4 sm:p-6 md:p-8 
                            ${isFixed ? 'fixed top-0 left-0' : ''}`}
                style={{ display: isFixed ? 'flex' : 'none' }}
            >
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[5vw] uppercase font-semibold mb-4 sm:mb-0'>Discover</h1>
                <div className='w-full sm:w-[30%] md:w-[35%] lg:w-[40%] h-[1px] bg-black my-4 sm:my-0'></div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[5vw] uppercase font-semibold mt-4 sm:mt-0'>Our Artist</h1>
            </div>
            {/* Original content (always visible) */}
            <div className="w-full flex sm:flex-row justify-between items-center p-4 sm:p-6 md:p-8">
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[5vw] uppercase font-semibold mb-4 sm:mb-0'>Discover</h1>
                <div className='w-full sm:w-[30%] md:w-[35%] lg:w-[40%] h-[1px] bg-black my-4 sm:my-0'></div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[5vw] uppercase font-semibold mt-4 sm:mt-0'>Our Artist</h1>
            </div>
            <div className='w-full'>
                {artistInfo.map((artist, index) => (
                    <div key={index} className={`w-full my-8 flex flex-col ${artist.align === 'start' ? 'sm:items-start' : 'sm:items-end'}`}>
                        <div className='w-full sm:w-[70%] md:w-[40%] lg:w-[30%]'>
                            <Image 
                                className='object-cover w-full h-auto brightness-90 hover:brightness-100 cursor-pointer transition-all duration-300' 
                                src={artist.Image} 
                                alt={artist.name}
                            />
                            <div className='mt-2'>
                                <h1 className='text-2xl sm:text-xl md:text-lg lg:text-base text-left uppercase font-semibold'>{artist.name}</h1>
                                <p className='text-xl sm:text-lg md:text-base lg:text-sm text-left uppercase font-normal'>{artist.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section4;
