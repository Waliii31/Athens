"use client";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import ReactPlayer from 'react-player';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
    const menuContainerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useGSAP(() => {
        if (menu) {
            gsap.fromTo(
                menuItemsRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.5,
                    ease: "power2.out"
                }
            );
        } else {
            gsap.to(menuItemsRef.current, {
                x: -50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.3,
                ease: "power2.in"
            });
        }
    }, { dependencies: [menu], scope: menuContainerRef });

    const toggleMenu = () => {
        setMenu(prevMenu => !prevMenu);
    };

    return (
        <>
            {/* First Nav: Always visible */}
            <nav className="w-full flex justify-between items-center px-5 py-3">
                <a className="text-xs font-[700]" href="/">
                    THE ART CONCIERGE <br />
                    <span className="text-xs font-[500]">ATHENS - PARIS</span>
                </a>
                <button 
                    className="flex items-center justify-center gap-1 text-sm font-[600] cursor-pointer"
                    onClick={toggleMenu}
                >
                    <Menu size={20} strokeWidth={3} /> Menu
                </button>
            </nav>

            {/* Second Nav: Full-screen menu, animated */}
            <nav className={`w-full h-screen absolute top-0 left-0 bg-black z-50 transition-transform duration-500 ease-in-out ${menu ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="w-full flex justify-between items-center px-5 py-3 text-white">
                    <a className="text-xs font-[700]" href="/">
                        THE ART CONCIERGE <br />
                        <span className="text-xs font-[500]">ATHENS - PARIS</span>
                    </a>
                    <button 
                        className="flex items-center justify-center gap-1 text-sm font-[600] cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <X size={22} strokeWidth={3} />
                    </button>
                </div>
                <div ref={menuContainerRef} className="Menu container">
                    <ul className="flex flex-col justify-center items-start gap-3 text-4xl font-[300] text-white">
                        {['Home', 'About Us', 'Artist', 'The Gallery', 'Contact'].map((item, index) => (
                            <li key={item} ref={el => menuItemsRef.current[index] = el}>
                                <a href="/" className="Hover left">{item}</a>
                            </li>
                        ))}
                    </ul>
                    {isClient && (
                        <ReactPlayer
                            className="Nav-Video absolute bottom-0 right-0"
                            url="https://theartconcierge.gr/wp-content/uploads/2024/02/concierge.mp4"
                            playing={true}
                            loop={true}
                            controls={false}
                            muted={true}
                        />
                    )}
                </div>
            </nav>
        </>
    );
}
