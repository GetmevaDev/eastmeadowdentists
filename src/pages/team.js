import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import "../scss/main.scss"
import SectionHeaderTeam from "../components/Team/seactionHeaderTeam"
import SectionAboutDoctor from "../components/Team/sectionAboutDoctor"
import { graphql, useStaticQuery } from "gatsby"

const TeamPage = props => {
  const { slug } = props.pageContext
  const data = useStaticQuery(
    graphql`
      {
        allStrapiOurDoctors {
          edges {
            node {
              About_Doctor_Team
              Name
              Photo_Team {
                publicURL
              }
              Specialization
              Slug
            }
          }
        }
      }
    `
  )

  const doctor = data.allStrapiOurDoctors.edges.find(
    edge => edge.node.Slug == slug
  )

  return (
    <Layout>
      <SEO
        title={"All Smiles Dental Spa"}
        description={"Cosmetic & Implant Dentistry: Massapequa, NY."}
      />
      {doctor && (
        <>
          <SectionHeaderTeam doctor={doctor.node} />
          <SectionAboutDoctor doctor={doctor.node} />
        </>
      )}

      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default TeamPage
