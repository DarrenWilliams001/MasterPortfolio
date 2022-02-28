import React from "react"

const Dots = () => {
  return (
    <div className="w-full items-center flex justify-center flex-col animate-bounce">
      <svg
        width={45}
        height={45}
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[45px] h-[45px] border-teal-300"
        preserveAspectRatio="none"
      >
        <circle
          className="stroke-teal-300"
          cx="22.5"
          cy="22.5"
          r="21.5"
          stroke-width={2}
        />
        <path
          d="M21.2228 28.7467L12.322 19.8459C11.8927 19.4166 11.8927 18.7207 12.322 18.2914L13.3601 17.2533C13.7886 16.8247 14.4832 16.8239 14.9127 17.2515L22 24.3055L29.0873 17.2515C29.5168 16.8239 30.2114 16.8247 30.6399 17.2533L31.678 18.2914C32.1073 18.7207 32.1073 19.4167 31.678 19.8459L22.7773 28.7467C22.348 29.176 21.652 29.176 21.2228 28.7467Z"
          className="fill-teal-300"
        />
      </svg>
    </div>
  )
}

export default Dots
