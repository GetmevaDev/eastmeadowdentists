import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Location from "../../images/location-dark.svg"
import Mail from "../../images/mail-dark.svg"
import Phone from "../../images/phone-dark.svg"
import WorkingHours from "../workingHours"

const SectionContactInfo = ({ contacts }) => {
  return (
    <section className="section-contact-info">
      <div className="container w1200">
        <div className="contact-wrapper">
          <div className="contact-info">
            <ul className="details">
              <li>
                <img src={Location} alt="Location" />
                <a href={contacts.Link_on_map}>{contacts.Text_Location}</a>
              </li>
              <li>
                <img src={Mail} alt="Mail" />
                <a href={`mailto:${contacts.Email}`}>{contacts.Email}</a>
              </li>
              <li>
                <img src={Phone} alt="Phone" />
                <a href={`tel:${contacts.Number_Phone}`}>
                  {contacts.Number_Phone}
                </a>
              </li>
            </ul>
            <WorkingHours />
          </div>
          <div className="contact-img">
            <img src={contacts.Building_Photo.publicURL} alt="Building Photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContactInfo
