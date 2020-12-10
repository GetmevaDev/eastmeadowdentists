import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import ADA from "../../images/ADA_Patient_Screening_Form.pdf"
import promoVideo from "../../images/promo-banner.mp4"
import promoPoster from "../../images/promo-banner.png"

import LinkAppointment from "../appointmentLink"

const SectionHeader = () => {
  const data = useStaticQuery(graphql`
    {
      strapiHomePage {
        Titles {
          Pretitle
          Title
          Subtitle
          Link_Video
        }
        Background_Header_Section {
          publicURL
        }
      }
    }
  `)
  return (
    <section
      className={"section-header"}
      style={{
        background: window.matchMedia("(max-width: 480px)").matches
          ? `url(${data.strapiHomePage.Background_Header_Section.publicURL})`
          : "",
      }}
    >
      <div
        className="container row"
        style={{
          alignItems: "center",
        }}
      >
        <div className="section-text">
          <h4 className="pretitle">{data.strapiHomePage.Titles.Pretitle}</h4>
          <h2 className="section-title">{data.strapiHomePage.Titles.Title}</h2>
          <h3 className="subtitle">{data.strapiHomePage.Titles.Subtitle}</h3>
          <div className="links">
            <a href={ADA} target={`_blank`}>
              COVID-19 Patient Screener
            </a>
            <LinkAppointment
              text={"Online check-in"}
              styles={{
                display: "flex",
                alignItems: "center",
                border: "2px solid #fff",
                borderRadius: "32px",
                padding: "0 31px",
                height: "50px",
                fontWeight: "700",
                fontSize: "1vw",
                lineHeight: "20px",
                letterSpacing: "0.16px",
                textDecoration: "none",
                color: "#fff",
                transition:
                  "color 0.3s, background 0.3s, -webkit-box-shadow 0.3s",
              }}
            />
            {/*<Link to={`https://meva.app/practices/all-smiles-dental-spa/appointment`}>Online check-in</Link>*/}
          </div>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        src={promoVideo}
        className="header-video"
        poster={promoPoster}
      ></video>
    </section>
  )
}
export default SectionHeader
