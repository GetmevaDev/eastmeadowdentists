import React from "react"
import Layout from "../components/layout"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionHeader from "../components/RepeatComponents/sectionHeader"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SEO from "../components/seo"
import SectionCard from "../components/Blog/SectionCard"

const Blog = props => {
  return (
    <Layout>
      <SEO
        seo={{
          Title: "Blog » All Smiles Dental Spa",
        }}
      />
      <SectionHeader headerPrimary="Recent Posts" headerSecondary="Blog" />
      <SectionCard {...props} />
      <SectionMap />
    </Layout>
  )
}

export default Blog
