import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"



const SectionHeaderAboutUs = () => {

  const data = useStaticQuery(graphql`
      {
          strapiAboutUs {
              Title
              Subtitle
              Image_section_header {
                  childImageSharp {
                      id
                      fixed(width: 1000){
                          ...GatsbyImageSharpFixed
                      }
                  }
              }
          }
      }
  `)

  return(
    <section className={`section-header-about-us`}>
        <div className="container w1200">
          <h2>{data.strapiAboutUs.Title}</h2>
          <h3>{data.strapiAboutUs.Subtitle}</h3>
        </div>
      <div className="image-box">
        <img src={data.strapiAboutUs.Image_section_header.childImageSharp.fixed.src} alt="" />
      </div>
    </section>
  )
}


export default SectionHeaderAboutUs