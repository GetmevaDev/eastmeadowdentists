import React from "react"
import SectionHeader from "../components/RepeatComponents/sectionHeader"
import SectionInsurances from "../components/Insurance/sectionInsurances"
import Layout from "../components/layout"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

function InsurancePage() {
  const data = useStaticQuery(graphql`
    {
      strapiInsurance {
        Title
        Subtitle
        Content_Subtitle
        Content_Title
        SEO {
          Title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO seo={data.strapiInsurance.SEO} />
      <SectionHeader
        headerPrimary={data.strapiInsurance.Title}
        headerSecondary={data.strapiInsurance.Subtitle}
      />
      <SectionInsurances insurancePage={data.strapiInsurance} />
      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default InsurancePage
