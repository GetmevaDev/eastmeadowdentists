import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import SectionAppointment from "./RepeatComponents/sectionAppointment"
import SectionMap from "./RepeatComponents/sectionMap"
import SectionHeaderTeam from "./Team/seactionHeaderTeam"
import SectionAboutDoctor from "./Team/sectionAboutDoctor"

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
