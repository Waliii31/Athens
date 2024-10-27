import React from 'react'
import Image from 'next/image'
import img1 from '../Images/asset 16.jpeg'
import img2 from '../Images/asset 17.jpeg'

const section6 = () => {
    return (
        <div className='w-full h-full flex justify-center gap-10 items-center flex-col mb-20'>
            <div className='w-full flex mt-10 justify-center container-lg items-center'>
                <h1 className='text-[5vw] leading-[4.1vw] uppercase font-semibold text-left'>At The Art Concierge, we believe that art has the power to transform spaces, evoke emotions, and enrich lives.</h1>
            </div>
            <div className='container mt-36 flex justify-center items-stretch gap-10'>
                <div className='w-1/3 h-[500px] '><Image className='w-full h-full object-cover' src={img1} alt='image' /></div>
                <div className='w-1/3 h-[500px] flex justify-center items-end'><Image className='object-contain' src={img2} alt='image' /></div>
                <div className='w-1/3 h-[500px] '>
                    <p className='text-[1.5vw] leading-[1.5vw]'>Experience the difference with The Art Concierge. Your art adventure awaits.Are you seeking expert advice on building your art collection? Are you interested in an art piece, a sculpture or have any other inquiries?</p>
                    <button className="relative mt-4 overflow-hidden bg-transparent text-black hover:text-white transition-all duration-300 text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1vw] font-semibold uppercase border-[1.1px] border-black px-4 py-2 rounded-3xl group">
                        <span className="relative z-10">Get In Touch</span>
                        <span className="absolute inset-0 bg-black transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default section6
