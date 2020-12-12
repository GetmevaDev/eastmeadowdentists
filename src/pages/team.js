import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import "../scss/main.scss"
import SectionHeaderTeam from "../components/Team/seactionHeaderTeam"
import SectionAboutDoctor from "../components/Team/sectionAboutDoctor"

const TeamPage = props => {
  const { doctor } = props.pageContext

  return (
    <Layout>
      <SEO
        title={"All Smiles Dental Spa"}
        description={"Cosmetic & Implant Dentistry: Massapequa, NY."}
      />
      <SectionHeaderTeam doctor={doctor} />
      <SectionAboutDoctor doctor={doctor} />

      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default TeamPage
