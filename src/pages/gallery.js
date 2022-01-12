import React from "react"
import Layout from "../components/layout"
import SectionHeader from "../components/RepeatComponents/sectionHeader"

import SectionMap from "../components/RepeatComponents/sectionMap"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"

import TeethComponent from "../components/BeforeAfter/beforeAfter"

const Gallery = () => {
  return (
    <Layout>
      <SectionHeader
        headerPrimary="Gallery"
        headerSecondary="Before and After"
      />
      <TeethComponent />
      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default Gallery
