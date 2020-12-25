import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SectionHeaderTeam from "../components/Team/seactionHeaderTeam"
import SectionAboutDoctor from "../components/Team/sectionAboutDoctor"

const TeamPage = props => {
  const { doctor } = props.pageContext

  console.log(doctor)

  return (
    <Layout>
      {doctor && (
        <>
          {doctor.SEO && <SEO seo={doctor.SEO} />}
          <SectionHeaderTeam doctor={doctor} />
          <SectionAboutDoctor doctor={doctor} />
        </>
      )}

      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default TeamPage
