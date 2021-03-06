import React from "react"

const Hero = () => (
  <div className="flex flex-col items-end my-36 md:my-52 justify-center">
    <div className=" flex flex-col">
      <p className=" teko-font text-[64px] text-right text-white">
        Hi, I’m Darren Williams.
      </p>
      <p className="text-2xl font-medium text-right capitalize text-white">
        Frontend Developer
      </p>
    </div>
    <div className="flex justify-start items-center mt-6 gap-2.5">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-2 rounded border border-teal-300">
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-teal-300">
          <a className="text-teal-300" href="#contact">
            Get in touch
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Hero
