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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container mx-auto flex relative flex-wrap items-center justify-between p-6 mb-6 min-h-screen">
        <main className="w-full">{children}</main>
        <Social />
        <footer className="text-white w-full text-right">
          © {new Date().getFullYear()} Darren Williams
        </footer>
        <BackgroundImage
          Tag="section"
          {...bgImage}
          preserveStackingContext
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
            opacity: `.2`,
            position: `fixed`,
            top: 0,
            left: 0,
            zIndex: "-1000",
          }}
        />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
