import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import NavbarFooter from "./navbarFooter"
import WorkingHours from "./workingHours"
import ContactUs from "./contactUs"


const Footer = () => {

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              Footer_Logo {
                  publicURL
              }
          }
      }
  `)

  return(
    <footer className={`site-footer`}>
      <div className="container row">
        <NavbarFooter />
        <WorkingHours />
        <ContactUs />
      </div>
      <div className={`footer-logo`}>
        <img src={data.strapiHomePage.Footer_Logo.publicURL} alt="Logo" />
        <p>©Copyright 2020. All rights reserved
          Terms of Service</p>
      </div>

    </footer>
  )
}

export default Footer