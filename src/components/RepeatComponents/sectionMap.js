import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import Img from "gatsby-image"


const SectionMap = () => {

  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Link_on_map
         
          }
      }
  `)

  return(
    <section className={`section-map`}>
      <div className="container w1200">
        {
          data.strapiContacts.Link_on_map && data.strapiContacts.Link_on_map !== null ?
            (
              <iframe
                src={data.strapiContacts.Link_on_map}
                width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false"
                tabIndex="0"></iframe>
            ) : null
        }

      </div>
    </section>
  )
}

export default SectionMap