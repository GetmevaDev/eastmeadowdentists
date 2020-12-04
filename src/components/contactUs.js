import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"


import Location from "../images/location.svg"
import Mail from "../images/mail.svg"
import Phone from "../images/phone.svg"


const ContactUs = () => {


  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Text_Location
              Link_on_map
              Number_Phone
              Email
          }
      }
  `)

  return(
    <div className={`footer-contact-box`}>
      <h5>
        Contact us
      </h5>

      <ul>
        <li>
            <img src={Location} alt="Location" />
            <a href={data.strapiContacts.Link_on_map}>{data.strapiContacts.Text_Location}</a>
        </li>
        <li>
            <img src={Mail} alt="Mail" />
            <a href={`mailto:${data.strapiContacts.Email}`}>{data.strapiContacts.Email}</a>
        </li>
        <li>
            <img src={Phone} alt="Phone" />
            <a href={`tel:${data.strapiContacts.Number_Phone}`}>{data.strapiContacts.Number_Phone}</a>
        </li>
      </ul>
    </div>
  )
}

export default ContactUs