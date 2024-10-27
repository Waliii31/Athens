"use client";

import { useState, useEffect } from 'react';

export default function Loader() {
    const [percentage, setPercentage] = useState(0);
    const [currentWord, setCurrentWord] = useState("THE ART");
    const [isWordsChanging, setIsWordsChanging] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const words = ["THE ART", "CONCIERGE", "MODERN ART", "SCULPTURES"];

    useEffect(() => {
        // Update percentage every 10ms to reach 100% in 1 second
        const percentageInterval = setInterval(() => {
            setPercentage(prev => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(percentageInterval);
                    setIsWordsChanging(false); // Stop changing words
                    setIsTransitioning(true); // Start the transition
                    return 100;
                }
            });
        }, 20); // 10ms per 1% = 1 second to 100%

        return () => clearInterval(percentageInterval); // Clear interval on unmount
    }, []);

    useEffect(() => {
        // Change words every 250ms (1000ms / 4 words) to synchronize with 1 second percentage counting
        const wordInterval = setInterval(() => {
            if (isWordsChanging) {
                setCurrentWord(prev => {
                    const currentIndex = words.indexOf(prev);
                    return words[(currentIndex + 1) % words.length];
                });
            }
        }, 250); // Change word every 250ms

        return () => clearInterval(wordInterval); // Clear interval on unmount
    }, [isWordsChanging]);

    return (
        <div className={`fixed inset-0 w-full h-screen overflow-hidden z-50 bg-black ${isTransitioning ? 'translate-y-[-100%]' : 'translate-y-[0%]'} transition-transform delay-200 duration-700 ease-in-out`}>
            <div className="container flex flex-col justify-center items-center h-full">
                <h1 className="text-white text-[10vw]">{currentWord}</h1>
                <div className="w-full flex justify-between items-center absolute bottom-20 px-20">
                    <h6 className="text-sm text-gray-400">Please Wait</h6>
                    <h6 className="text-sm text-gray-400">{percentage}%</h6>
                </div>
            </div>
        </div>
    );
}
