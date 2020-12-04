import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"



const SectionTeam = () => {


  const data = useStaticQuery(graphql`
      {
          strapiPhotoOurTeam {
              Photo {
                  childImageSharp {
                      fluid(maxWidth: 2000) {
                         ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      }
  `)

  return(
    <section className={`section-team`}>
      <h2 className={`title-section`}>Meet Our Team</h2>
      <div className="container">
          <div className="box-img-team">
            <Img
            fluid={data.strapiPhotoOurTeam.Photo.childImageSharp.fluid}
            />
            {/*<img src={data.strapiPhotoOurTeam.Photo.childImageSharp.fixed.src} alt="Our Team" />*/}

          </div>
      </div>
    </section>
  )
}

export default SectionTeam