import React from "react"
import Layout from "../components/layout"
import SectionHeader from "../components/RepeatComponents/sectionHeader"

import SectionMap from "../components/RepeatComponents/sectionMap"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SEO from "../components/seo"

import TeethComponent from "../components/BeforeAfter/beforeAfter"
import { graphql, useStaticQuery } from "gatsby"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      strapiGallerybBeforeAfter {
        SEO {
          Title
        }
        SubTitle
        Title
      }
    }
  `)

  return (
    <Layout>
      <SEO seo={data.strapiGallerybBeforeAfter.SEO} />
      <SectionHeader
        headerPrimary={data.strapiGallerybBeforeAfter.Title}
        headerSecondary={data.strapiGallerybBeforeAfter.SubTitle}
      />
      <TeethComponent />
      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default Gallery
