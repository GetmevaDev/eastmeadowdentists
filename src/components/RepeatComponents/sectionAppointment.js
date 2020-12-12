import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import LinkAppointment from "../appointmentLink"

const SectionAppointment = () => {
  const data = useStaticQuery(graphql`
    {
      strapiHomePage {
        Text_Section_Appointment
        Section_Appointment_Image {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  `)

  return (
    <section className={`section-appointment`}>
      <div className="container row">
        <div className={`img-section`}>
          <img
            src={
              data.strapiHomePage.Section_Appointment_Image.childImageSharp
                .fixed.src
            }
            alt="teeth"
          />
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
