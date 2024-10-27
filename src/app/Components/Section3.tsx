const Section3 = () => {
  return (
    <div className="w-full container-lg py-16 md:py-24 lg:h-screen flex flex-col justify-center items-start px-4 md:px-6 lg:px-8">
      <p className="text-left text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-semibold leading-tight mb-6 md:mb-8">
        Whether you&apos;re seeking expert advice on building your art collection, finding the perfect piece to complement your space, or discovering emerging artists, we&apos;re here to provide personalized recommendations and unparalleled service.
      </p>
      <div className="w-full mt-4 h-auto flex justify-start items-center">
        <button className="relative overflow-hidden bg-transparent text-black hover:text-white transition-all duration-300 text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1vw] font-semibold uppercase border-[1.1px] border-black px-4 py-2 rounded-3xl group">
          <span className="relative z-10">More About Us</span>
          <span className="absolute inset-0 bg-black transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
        </button>
      </div>
    </div>
  )
}

export default Section3
