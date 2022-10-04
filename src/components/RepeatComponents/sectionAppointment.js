import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import LinkAppointment from "../appointmentLink"

import Image from "../image"

const SectionAppointment = ({ noMarginTop = false }) => {
  const data = useStaticQuery(graphql`
    {
      strapiHomePage {
        Text_Section_Appointment
        Section_Appointment_Image_AlternativeText
       mobileImage: Section_Appointment_Image {
              childImageSharp {
                  fixed(width: 400){
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
        }   
       desktopImage: Section_Appointment_Image {
            childImageSharp {
                  fixed(width: 800){
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
        }
      }
    }
  `)

  return (
    <section className={`section-appointment ${noMarginTop ? 'noMarginTop' : ''}`}>
      <div className="container row">
        <div className={`img-section`}>
          <Image
          image={data.strapiHomePage.mobileImage.childImageSharp.fixed}
          desktopImage={data.strapiHomePage.desktopImage.childImageSharp.fixed}
          alt={data.strapiHomePage.Section_Appointment_Image_AlternativeText}
          />
          {/*<img*/}
          {/*  src={*/}
          {/*    data.strapiHomePage.Section_Appointment_Image[0].url*/}
          {/*  }*/}
          {/*  alt={*/}
          {/*    data.strapiHomePage.Section_Appointment_Image[0].alternativeText*/}
          {/*  }*/}
          {/*/>*/}
        </div>
        <div className={`box-link-appointment`}>
          <h2 className={`title-section-appointment`}>
            {data.strapiHomePage.Text_Section_Appointment}
          </h2>
          <LinkAppointment
            className={"section-appointment-link"}
            text={`MAKE AN APPOINTMENT`}
            styles={{
              display: `inline-flex`,
              alignItems: "center",
              marginTop: "25px",
              border: "2px solid #FFFFFF",
              borderRadius: "32px",
              padding: "0 30px",
              height: "45px",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "18px",
              letterSpacing: "0.15px",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#FFFFFF",
              transition: "color 0.3s, background 0.3s",
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default SectionAppointment
