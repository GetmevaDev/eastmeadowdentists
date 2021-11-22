import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import Image from "../image"



const SectionTeam = () => {


  const data = useStaticQuery(graphql`
      {
          strapiPhotoOurTeam {
             mobileImage: Photo {
              childImageSharp {
                  fixed(width: 300){
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
              } 
             desktopImage: Photo {
                childImageSharp {
                  fixed(width: 852){
                    ...GatsbyImageSharpFixed_withWebp_noBase64
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
            {/*<Img*/}
            {/*fluid={data.strapiPhotoOurTeam.Photo.childImageSharp.fluid}*/}
            {/*/>*/}
            {/*<img src={data.strapiPhotoOurTeam.Photo[0].url} alt={data.strapiPhotoOurTeam.Photo[0].alternativeText} />*/}
              <Image
              image={data.strapiPhotoOurTeam.mobileImage.childImageSharp.fixed}
              desktopImage={data.strapiPhotoOurTeam.desktopImage.childImageSharp.fixed}
              alt={`Our team`}
              />
          </div>
      </div>
    </section>
  )
}

export default SectionTeam