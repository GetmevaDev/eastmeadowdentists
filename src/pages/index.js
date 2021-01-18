import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionHeader from "../components/Home-Page-Components/sectionHeader"
import SectionOffer from "../components/Home-Page-Components/sectionOffer"
import SectionWelcome from "../components/Home-Page-Components/sectionWelcome"
import SectionComments from "../components/Home-Page-Components/sectionComment"
import SectionReason from "../components/Home-Page-Components/sectionReason"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionServices from "../components/Home-Page-Components/sectionServices"
import SectionTeam from "../components/RepeatComponents/sectionTeam"
import SectionMap from "../components/RepeatComponents/sectionMap"

import "../scss/main.scss"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const seo = useStaticQuery(graphql`
    {
      strapiHomePage {
        SEO {
          Description
          Title
        }
          Schemaorg {
              Code_schema
          }
      }
    }
  `)

  return (
    <Layout>
      <SEO seo={seo.strapiHomePage.SEO} schemaMarkup={seo.strapiHomePage.Schemaorg && seo.strapiHomePage.Schemaorg !== null ?
        JSON.parse(seo.strapiHomePage.Schemaorg.Code_schema.replace(/\s+/g, ' ')) : null
      } />
      <SectionHeader />
      <SectionOffer />
      <SectionWelcome />
      <SectionComments />
      <SectionReason />
      <SectionAppointment />
      <SectionServices />
      <SectionTeam />
      <SectionMap />
    </Layout>
  )
}
export default IndexPage
