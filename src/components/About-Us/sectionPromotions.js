import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import LinkAppointment from "../appointmentLink"

const SectionPromotions = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiReasons(limit: 3, sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            Title
            Content
            Card_Image {
              url
              alternativeText
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
              <img src={item.node.Card_Image[0].url} alt={item.node.Card_Image[0].alternativeText} />
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
