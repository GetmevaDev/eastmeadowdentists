import React from "react"
import Layout from "../components/layout"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionTeam from "../components/RepeatComponents/sectionTeam"
import SectionHeaderAboutUs from "../components/About-Us/sectionHeaderAboutUs"
import SectionWelcomeAboutUs from "../components/About-Us/sectionWelcomeAboutUs"
import SectionDoctors from "../components/About-Us/sectionDoctors"
import SectionGallery from "../components/About-Us/sectionGallery"

import "../scss/main.scss"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const AboutUs = () => {
  const seo = useStaticQuery(graphql`
    {
      strapiAboutUs {
        SEO {
          Title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO seo={seo.strapiAboutUs.SEO[0]} />
      <SectionHeaderAboutUs />
      <SectionWelcomeAboutUs />
      <SectionDoctors />
      <SectionTeam />
      <SectionAppointment />
      <SectionGallery />
      <SectionMap />
    </Layout>
  )
}

export default AboutUs
