import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import Img from "gatsby-image"


const SectionMap = () => {

  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Link_on_map
              Img_map {
                  childImageSharp {
                      fluid(maxWidth: 2000){
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      }
  `)

  return(
    <section className={`section-map`}>
      <div className="container w1200">
        <Link to={data.strapiContacts.Link_on_map}>
            <Img
            fluid={data.strapiContacts.Img_map.childImageSharp.fluid}
            />
        </Link>
      </div>
    </section>
  )
}

export default SectionMap