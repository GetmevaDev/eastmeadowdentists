import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const LinkAppointment = props => {
  const data = useStaticQuery(graphql`
    {
      strapiContacts {
        Link_Appointment
      }
    }
  `)

  return (
    <Link
      to={props.link ? props.link : data.strapiContacts.Link_Appointment}
      className={`appointment-link ${props.className}`}
      style={props.styles}
    >
      {props.text}
    </Link>
  )
}

export default LinkAppointment
