import React from "react"
import Layout from "../components/layout"
import SectionHeader from "../components/RepeatComponents/sectionHeader"
import SEO from "../components/seo"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import ContactUs from "../components/contactUs"
import SectionContactInfo from "../components/Contact-Us/sectionContactInfo"
import { graphql, useStaticQuery } from "gatsby"

function ContactUsPage() {
  const data = useStaticQuery(graphql`
    {
      strapiContacts {
        Text_Location
        Link_on_map
        Number_Phone
        Email
        Building_Photo {
          publicURL
        }
        Title
        Subtitle
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={"All Smiles Dental Spa"}
        description={"Cosmetic & Implant Dentistry: Massapequa, NY."}
      ></SEO>

      <SectionHeader
        headerPrimary={data.strapiContacts.Title}
        headerSecondary={data.strapiContacts.Subtitle}
      />
      <SectionContactInfo contacts={data.strapiContacts} />
      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default ContactUsPage
