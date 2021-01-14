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
                  url
                  alternativeText
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
        <img src={data.strapiHomePage.Footer_Logo[0].url} alt={data.strapiHomePage.Footer_Logo[0].alternativeText} />
        <p>©Copyright 2020. All rights reserved
          Terms of Service</p>
      </div>

    </footer>
  )
}

export default Footer