import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"



const SectionTeam = () => {


  const data = useStaticQuery(graphql`
      {
          strapiPhotoOurTeam {
              Photo {
                  url
                  alternativeText
              }
          }
      }
  `)

  return(
    <section className={`section-team`}>
      <h2 className={`title-section`}>Meet Our Team</h2>
      <div className="container">
          <div className="box-img-team">
            {/*<Img*/}
            {/*fluid={data.strapiPhotoOurTeam.Photo.childImageSharp.fluid}*/}
            {/*/>*/}
            <img src={data.strapiPhotoOurTeam.Photo[0].url} alt={data.strapiPhotoOurTeam.Photo[0].alternativeText} />

          </div>
      </div>
    </section>
  )
}

export default SectionTeam