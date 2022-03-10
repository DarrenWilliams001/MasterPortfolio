import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import resumeFile from "../resume/2022_DWilliams_Resume.pdf"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  const openMobileMenu = () => {
    toggleExpansion(!isExpanded)
  }

  return (
    <>
      <nav className=" h-full mx-auto flex flex-wrap items-center justify-between sticky top-0 z-30 p-6 bg-primary">
        <div className="w-2/12">
          <a className="text-3xl text-teal-300 teko-font" href="/">
            WILLIAMS
          </a>{" "}
        </div>
        <div className="md:w-6/12 lg:w-4/12">
          <ul className="hidden md:visible md:flex justify-between  w-full">
            <Link to="/#about" className="text-white hover:text-teal-300">
              About
            </Link>
            <Link to="/#projects" className="text-white hover:text-teal-300 ">
              Portfolio
            </Link>
            <a href={resumeFile} className="text-white hover:text-teal-300">
              Resume
            </a>
            <Link to="/#contact" className="text-white hover:text-teal-300">
              Get in Touch
            </Link>
          </ul>
          <div className="md:hidden flex items-center">
            <button onClick={openMobileMenu} className="outline-none">
              <svg
                class="w-6 h-6 text-white hover:text-teal-300 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className={isExpanded ? "md:hidden" : "hidden"}>
            <ul className="flex flex-col absolute top-[60px] left-0 w-full text-center bg-primary h-[20vh] justify-evenly border-b-2 border-teal-300">
              <Link to="/#about" className="text-white hover:text-teal-300">
                About
              </Link>
              <Link to="/#projects" className="text-white hover:text-teal-300">
                Portfolio
              </Link>
              <a href={resumeFile} className="text-white hover:text-teal-300">
                Resume
              </a>
              <Link to="/#contact" className="text-white hover:text-teal-300">
                Get in Touch
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
