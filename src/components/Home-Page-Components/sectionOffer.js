import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import LinkAppointment from "../appointmentLink"
import Image from "../image"

const SectionOffer = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiReasons(limit: 3) {
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
    <section className={`section-offer`}>
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
                  marginTop: "auto",
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
