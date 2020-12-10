import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import LinkAppointment from "../appointmentLink"

const SectionOffer = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiReasons(limit: 3) {
        edges {
          node {
            Title
            Content
            Card_Image {
              publicURL
            }
          }
        }
      }
    }
  `)

  return (
    <section className={`section-offer`}>
      <div className="container row">
        {data.allStrapiReasons.edges.map(item => {
          return (
            <div className={`card_reason`}>
              <img src={item.node.Card_Image.publicURL} alt="" />
              <h4>{item.node.Title}</h4>
              <p>{item.node.Content}</p>
              <LinkAppointment
                className={`hover`}
                text={"Book Appointment"}
                styles={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "2px solid #214C9E",
                  borderRadius: "32px",
                  padding: "0 38px",
                  boxShadow: "0px 3px 16px #00000014",
                  height: "50px",
                  fontWeight: "700",
                  fontSize: "15px",
                  lineHeight: "18px",
                  letterSpacing: "0.15px",
                  textDecoration: "none",
                  color: "#fff",
                  background: "#214C9E",

                  transition: "color 0.3s, background 0.3s",
                }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SectionOffer
