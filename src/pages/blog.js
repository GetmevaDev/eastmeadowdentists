import React from "react"
import Layout from "../components/layout"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionHeader from "../components/RepeatComponents/sectionHeader"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SEO from "../components/seo"
import SectionCard from "../components/Blog/SectionCard"

const BlogPage = props => {
  console.log(props)
  return (
    <Layout>
      <SEO
        title={"All Smiles Dental Spa"}
        description={"Cosmetic & Implant Dentistry: Massapequa, NY."}
      ></SEO>
      <SectionHeader headerPrimary="Recent Posts" headerSecondary="Blog" />
      <SectionCard />
      {/* <SectionBlogPage /> */}
      <SectionMap />
    </Layout>
  )
}

export default BlogPage
