import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Image from "../image"


const SectionReason = () =>{


  const data = useStaticQuery(graphql`
      {
          allStrapiWhyChooseUses(limit: 3) {
              edges {
                  node {
                     mobileImage: Image {
                        childImageSharp {
                            fixed(width:80){
                           ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                      }  
                     desktopImage: Image {
                       childImageSharp {
                            fixed(width:80){
                           ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                      }
                      Title
                      Text
                  }
              }
          }
          titleSection:  strapiHomePage {
              Section_Reason {
                  Title
                  Text
              }
          }
      }
  `)

  return(
    <section className={`section-reason`}>
      <h2 className="title-section">{data.titleSection.Section_Reason.Title}</h2>
      <p className={`reviews_text`}>{data.titleSection.Section_Reason.Text}</p>


      <div className="container row bg-container">
        {
          data.allStrapiWhyChooseUses.edges.map(item => {
            return(
              <div className={`card`}>
                <Image
                image={item.node.mobileImage.childImageSharp.fixed}
                desktopImage={item.node.desktopImage.childImageSharp.fixed}
                alt={`icon`}
                />
                {/*<img src={item.node.Image[0].url} alt={item.node.Image[0].alternativeText} />*/}
                <h5>{item.node.Title}</h5>
                <p>{item.node.Text}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}


export default SectionReason