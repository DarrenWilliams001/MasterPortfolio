import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div className="w-8/12 my-60 bg-white rounded-lg flex primary-navy-font p-10 justify-center mx-auto">
      <div className=" mr-6">
        <p className=" text-4xl teko-font text-left">A little About Me</p>
        <p className="text-base font-light text-left">
          Australian born developer with a passion for React. After completing
          my diploma in web development in 2019, developing has been a driving
          force in where i am today. After 10+ years as a graphic designer, i
          now find myself with more drive than ever to improve my skill set as a
          developer. Driven by continuous learning and a hunger to solve
          problems creatively, I am always looking for new challenges. This has
          led me to gain experience in web development across a broad range of
          areas - including front-end engineering, back end programming and
          everything in between.
        </p>
      </div>
      <div className="w-full">
        <StaticImage
          src="../images/img_3850.jpg"
          width={180}
          height={200}
          layout="fixed"
          transformOptions={"cover"}
          className="rounded-lg"
          alt="Hi There"
        />
      </div>
    </div>
  )
}
export default About
