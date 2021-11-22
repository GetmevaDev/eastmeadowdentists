import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import Image from "../image"



const SectionServices = () => {

  const data = useStaticQuery(graphql`
      {
          allStrapiServices {
              edges {
                  node {
                      Name_services
                      Link_services
                     mobileImage: Image_services {
                           childImageSharp {
                            fixed(width:36){
                             ...GatsbyImageSharpFixed_withWebp_noBase64
                            }
                          }
                      }  
                     desktopImage: Image_services {
                           childImageSharp {
                          fixed(width:36){
                           ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                      }
                  }
              }
          }
          titleSection:  strapiHomePage {
              Section_Services {
                  Text
                  Title
              }
          }
      }
  `)

  return(
    <section className={`section-services`}>
      <h2 className="title-section">{data.titleSection.Section_Services.Title}</h2>
      <p className="reviews_text">{data.titleSection.Section_Services.Text}</p>
      <div className="container w1200 row">
        {
          data.allStrapiServices.edges.map(item => {
            return(
              <div className={`Link_services`}>
                <Link className={`link`} to={`/services${item.node.Link_services}`}>
                  <Image
                  image={item.node.mobileImage.childImageSharp.fixed}
                  desktopImage={item.node.desktopImage.childImageSharp.fixed}
                  alt={`icon`}
                  />
                  {/*<img src={item.node.Image_services.publicURL} alt="" />*/}
                  <h4>{item.node.Name_services}</h4>
                </Link>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}


export default SectionServices