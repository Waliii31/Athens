"use client"

import Image from 'next/image'
import topImage from '../Images/asset 15.jpeg'
import bottomImage from '../Images/bottom-image.jpg'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Header = () => {
      useGSAP(()=>{
        gsap.from(".Header .header-img1", {
          delay: 2.9,
          duration: 1,
          y:50,
          opacity: 0,
          ease: "power2"
        })

        gsap.from(".Header .header-img2", {
          delay: 2.9,
          duration: 1,
          y:40,
          opacity: 0,
          ease: "power2"
        })

        gsap.from(".Header .main-heading", {
          delay: 2.9,
          duration: 1,
          y:20,
          opacity: 0,
          ease: "power2"
        })
    })

  return (
    <div className='Header overflow-y-hidden'>
      <Image className='header-img1 z-10' alt='' src={topImage} />
      <h1 className='main-heading z-20'>
        Welcome to <br /> The Art Concierge <br /> your premier art <br /> destination
      </h1>
      <Image className='header-img2 z-0 brightness-100' src={bottomImage} alt='' />
    </div>
  )
}

export default Header


