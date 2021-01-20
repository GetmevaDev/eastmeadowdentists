import React from "react"
import Layout from "../components/layout"
import SectionHeader from "../components/RepeatComponents/sectionHeader"
import SEO from "../components/seo"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SectionContactInfo from "../components/Contact-Us/sectionContactInfo"
import { graphql, useStaticQuery } from "gatsby"
import seo from "../components/seo"

function ContactUsPage() {
  const data = useStaticQuery(graphql`
    {
      strapiContacts {
        Text_Location
        Link_on_map
        Number_Phone
        
        Building_Photo {
            url
            alternativeText
        }
        Title
        Subtitle
        SEO {
          Title
          Description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO seo={data.strapiContacts.SEO} />

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
