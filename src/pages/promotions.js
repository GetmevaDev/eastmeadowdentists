import React from "react"
import SectionPromotions from "../components/About-Us/sectionPromotions"
import SectionHeader from "../components/RepeatComponents/sectionHeader"
import Layout from "../components/layout"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

function PromotionsPage() {
  const seo = useStaticQuery(graphql`
    {
      strapiPromotions {
        SEO {
          Description
          Title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO seo={seo.strapiPromotions.SEO} />
      <SectionHeader headerPrimary="Promotions" />
      <SectionPromotions />
      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default PromotionsPage
