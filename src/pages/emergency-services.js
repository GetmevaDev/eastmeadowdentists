import React from "react"
import Layout from "../components/layout"
import SectionHeaderEmergencyServices from "../components/EmergencyServices/sectionHeaderEmergencyServices"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SectionEmergencyDentistry from "../components/EmergencyServices/sectionEmergencyDentistry"
import SectionQuestionOne from "../components/EmergencyServices/questionOne"
import SectionQuestionTwo from "../components/EmergencyServices/sectionQuestionTwo"
import SectionQuestionThree from "../components/EmergencyServices/sectionQuestionThree"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const EmergencyServices = () => {
  const seo = useStaticQuery(graphql`
    {
      strapiEmergencyServices {
        SEO {
          Description
          Title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO seo={seo.strapiEmergencyServices.SEO} />
      <SectionHeaderEmergencyServices />
      <SectionEmergencyDentistry />
      <SectionQuestionOne />
      <SectionQuestionTwo />
      <SectionQuestionThree />
      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default EmergencyServices
