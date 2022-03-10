/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import Header from "./header"
import Social from "./socials"
import SEO from "../components/seo"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          gatsbyImageData(formats: WEBP, quality: 90, width: 2160)
        }
      }
    }
  `)

  const image = getImage(data.placeholderImage)
  const bgImage = convertToBgImage(image)

  return (
    <>
      <SEO title="Darren Williams - Portfolio" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="md:container mx-auto flex relative flex-wrap items-center justify-between p-8 mb-6 z-500 min-h-screen overflow-hidden">
        <main className="w-full">{children}</main>
      </div>
      <Social />
      <footer className="text-white border-t-2 py-6 text-center border-t-teal-300 w-full">
        © {new Date().getFullYear()} Darren Williams
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
