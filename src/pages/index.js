import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Dots from "../components/dots"
import ContactForm from "../components/contactForm"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Dots />
      <About />
      <Dots />
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
