import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"



const SectionServices = () => {

  const data = useStaticQuery(graphql`
      {
          allStrapiServices {
              edges {
                  node {
                      Name_services
                      Link_services
                      Image_services {
                          publicURL
                      }
                  }
              }
          }
      }
  `)

  return(
    <section className={`section-services`}>
      <h2 className="title-section">Our Services</h2>
      <p className="reviews_text">This site does everything you could possibly want it to do and not only that, beautifully carefully designed and extremely intuitive to use.</p>
      <div className="container w1200 row">
        {
          data.allStrapiServices.edges.map(item => {
            return(
              <div className={`Link_services`}>
                <Link className={`link`} to={`/services${item.node.Link_services}`}>
                  <img src={item.node.Image_services.publicURL} alt="" />
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