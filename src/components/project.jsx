import React, { useState, useEffect } from "react"

const Project = props => {
  const [id, setid] = useState(props.id)

  return (
    <div className="my-10 lg:my-20 pb-10 lg:pb-20 border-b-2 border-teal-300">
      <div
        className={
          id % 2
            ? "flex flex-col lg:flex-row-reverse justify-between"
            : "flex flex-col lg:flex-row justify-between"
        }
      >
        <div
          className={
            id % 2
              ? "lg:pl-6 text-center lg:text-left w-full lg:w-4/12"
              : "lg:pr-6 text-center  lg:text-left  w-full lg:w-4/12"
          }
        >
          <a className="my-4 lg:my-0" href={props.link}>
            <h3 className="teko-font text-teal-300 text-3xl lg:text-2xl">
              {props.title}
            </h3>
          </a>
          <p className="text-white">{props.desc}</p>
        </div>
        <img
          alt={props.title}
          width={100}
          height={100}
          className="my-4 w-full lg:w-8/12 lg:my-0"
          src={props.mainImage}
        />
      </div>
    </div>
  )
}

export default Project
