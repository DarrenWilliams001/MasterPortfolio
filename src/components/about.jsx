import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <>
      <a id="about"></a>
      <div className="w-full lg:w-8/12 my-36 md:my-52 bg-white  rounded-lg flex flex-col-reverse lg:flex-row items-center text-primary px-4 py-10 md:p-10 justify-center mx-auto">
        <div className=" md:mr-6">
          <h3 className=" text-4xl teko-font text-center lg:text-left my-4">
            A little About Me
          </h3>
          <p className="text-base font-light text-center lg:text-left">
            Australian born developer with a passion for React. After completing
            my diploma in web development in 2019, developing has been a driving
            force in where i am today. After 10+ years as a graphic designer, i
            now find myself with more drive than ever to improve my skill set as
            a developer. Driven by continuous learning and a hunger to solve
            problems creatively, I am always looking for new challenges. This
            has led me to gain experience in web development across a broad
            range of areas - including front-end engineering, back end
            programming and everything in between.
          </p>
        </div>
        <div className="w-full relative flex justify-center">
          <StaticImage
            src="../images/img_3850.jpg"
            layout="fixed"
            width={200}
            height={200}
            transformOptions={"cover"}
            className="rounded-lg w-full"
            alt="Hi There"
          />
        </div>
      </div>
    </>
  )
}
export default About
