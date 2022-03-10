import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Project from "./project"

const Projects = () => {
  const projects = useStaticQuery(graphql`
    query MyQuery {
      projectsJson {
        projects {
          description
          link
          mainImage {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
          title
          software1 {
            id
            publicURL
          }
        }
      }
    }
  `)

  return (
    <>
      <a id="projects"></a>
      <div className="my-36 md:my-52">
        <h3 className="text-4xl teko-font text-center lg:text-left text-white border-b-teal-300 border-b-2 w-full lg:w-4/12">
          Previous Work/Projects
        </h3>
        <div className="d-flex">
          {projects.projectsJson.projects.map((p, i) => {
            console.log(i)
            return (
              <Project
                key={i}
                id={i}
                title={p.title}
                mainImage={p.mainImage.childrenImageSharp[0].fluid.src}
                software={p.software1}
                link={p.link}
                desc={p.description}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Projects
