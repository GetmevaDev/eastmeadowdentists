import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import LinkAppointment from "../appointmentLink"
import Image from "../image"

const SectionPromotions = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiReasons(limit: 3, sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            Title
            Content
               mobileImage: Card_Image {
                 childImageSharp {
                 fixed(width:80){
                   ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                  }
              } 
               desktopImage: Card_Image {
                 childImageSharp {
                 fixed(width:80){
                   ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className={`section-offer promotions`}>
      <div className="container row">
        {data.allStrapiReasons.edges.map(item => {
          return (
            <div className={`card_reason`}>
              <Image
                image={item.node.mobileImage.childImageSharp.fixed}
                desktopImage={item.node.desktopImage.childImageSharp.fixed}
                alt={`Icon`}
              />
              {/*<img src={item.node.Card_Image[0].url} alt={item.node.Card_Image[0].alternativeText} />*/}
              <h4>{item.node.Title}</h4>
              <div
                key={item.node.id}
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: item.node.Content }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SectionPromotions
