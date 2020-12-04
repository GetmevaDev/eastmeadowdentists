import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"


const SectionDoctors = () =>{

  const data = useStaticQuery(graphql`
      {
          allStrapiOurDoctors {
              edges {
                  node {
                      Specialization
                      Name
                      About_Doctor
                      Photo {
                          childImageSharp {
                              fixed(width: 361){
                                  ...GatsbyImageSharpFixed
                              }
                          }
                      }
                  }
              }
          }
      }
  `)

  return(
    <section className={`section-our-doctors`}>
      <div className="container w1200">
        {
          data.allStrapiOurDoctors.edges.map((item,i) => (
            <div className={`card-doctor row ${i % 2 === 1 ? "row-reverse" : " "}`}>
              <div className={`text-box`}>
                <h2 className={`dds_pretitle`}>{item.node.Specialization}</h2>
                <h3 className={`dds_title`}>{item.node.Name}</h3>
                <p className={`dds_text`}>{item.node.About_Doctor}</p>
              </div>
              <div className={`photo-box`}>
                <Img
                  fixed={item.node.Photo.childImageSharp.fixed}
                />
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default SectionDoctors