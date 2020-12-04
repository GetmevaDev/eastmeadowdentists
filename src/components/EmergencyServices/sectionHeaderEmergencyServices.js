import React from "react"
import {graphql, useStaticQuery} from "gatsby"



const SectionHeaderEmergencyServices = () => {

  const data = useStaticQuery(graphql`
      {
          strapiEmergencyServices {
              Title
              Text
              Image_Section_Header {
                  childImageSharp {
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
        <h2>{data.strapiEmergencyServices.Title}</h2>
        <h3>{data.strapiEmergencyServices.Text}</h3>
      </div>
      <div className="image-box">
        <img src={data.strapiEmergencyServices.Image_Section_Header.childImageSharp.fixed.src} alt="" />
      </div>
    </section>
  )
}


export default SectionHeaderEmergencyServices