import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import NavbarFooter from "./navbarFooter"
import WorkingHours from "./workingHours"
import ContactUs from "./contactUs"
import Image from "./image"


const Footer = () => {

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
                mobileImage: Footer_Logo {
              childImageSharp {
                  fixed(width: 70){
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
              } 
             desktopImage: Footer_Logo {
                childImageSharp {
                  fixed(width: 187){
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
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
        <Image
        image={data.strapiHomePage.mobileImage.childImageSharp.fixed}
        desktopImage={data.strapiHomePage.desktopImage.childImageSharp.fixed}
        alt={`footer-logo`}
        />
        {/*<img src={data.strapiHomePage.Footer_Logo[0].url} alt={data.strapiHomePage.Footer_Logo[0].alternativeText} />*/}
        <p>©Copyright 2020. All rights reserved
          Terms of Service</p>
      </div>

    </footer>
  )
}

export default Footer