import React from "react"
import Layout from "../components/layout"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionTeam from "../components/RepeatComponents/sectionTeam"
import SectionPromotions from "../components/About-Us/sectionPromotions"
import SectionHeaderAboutUs from "../components/About-Us/sectionHeaderAboutUs"
import SectionWelcomeAboutUs from "../components/About-Us/sectionWelcomeAboutUs"
import SectionDoctors from "../components/About-Us/sectionDoctors"
import SectionGallery from "../components/About-Us/sectionGallery"

import "../scss/main.scss"
import SEO from "../components/seo"

const AboutUs = () => {
  return (
    <Layout>
      <SEO
        title={"All Smiles Dental Spa"}
        description={"Cosmetic & Implant Dentistry: Massapequa, NY."}
      />
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
