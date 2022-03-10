import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Dots from "../components/dots"
import ContactForm from "../components/contactForm"
import Projects from "../components/projects"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Dots />
      <About />
      <Dots />
      <Projects />
      <Dots />
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
