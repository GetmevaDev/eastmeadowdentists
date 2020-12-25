import React from "react"
import Layout from "./layout"
import SectionAppointment from "./RepeatComponents/sectionAppointment"
import SectionHeader from "./RepeatComponents/sectionHeader"
import SectionMap from "./RepeatComponents/sectionMap"
import SEO from "./seo"
import SectionCard from "./Blog/SectionCard"

const Blog = props => {
  return (
    <Layout>
      <SEO
        seo={{
          Title: "Blog » All Smiles Dental Spa",
        }}
      />
      <SectionHeader headerPrimary="Recent Posts" headerSecondary="Blog" />
      {props.pageContext && <SectionCard {...props} />}
      <SectionMap />
    </Layout>
  )
}

export default Blog
