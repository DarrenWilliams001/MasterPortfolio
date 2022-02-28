import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="container mx-auto flex flex-wrap items-center justify-between p-6 mb-6 transparent">
      <div className="text-3xl text-teal-300 teko-font">WILLIAMS</div>
      <div className="w-4/12">
        <ul className="flex justify-between">
          <Link className="text-white">About</Link>
          <Link className="text-white">Resume</Link>
          <Link className="text-white">Portfolio</Link>
          <Link className="text-white">Get in Touch</Link>
        </ul>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
