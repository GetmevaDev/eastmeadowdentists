import React from "react"
import LinkAppointment from "../appointmentLink"

const SectionHeaderTeam = ({ doctor }) => {
  return (
    <section className={`section-header-about-us`}>
      <div className="container w1200">
        <h3>{doctor.Specialization}</h3>
        <h2>{doctor.Name}</h2>
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
      <div className="image-box image-centered">
        <img
          src={doctor.Photo_Team.childImageSharp.fixed.src}
          alt={doctor.Name}
        />
      </div>
    </section>
  )
}

export default SectionHeaderTeam
