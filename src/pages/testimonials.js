import React from "react"
import SectionHeader from "../components/RepeatComponents/sectionHeader"
import SectionComments from "../components/Home-Page-Components/sectionComment"
import Layout from "../components/layout"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SEO from "../components/seo"
import SectionReviewForm from "../components/Testimonials/sectionReviewForm"
import { graphql, useStaticQuery } from "gatsby"

function TestimonialsPage() {
  const data = useStaticQuery(graphql`
    {
      strapiTestimonials {
        Subtitle
        Title
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title={"All Smiles Dental Spa"}
        description={"Cosmetic & Implant Dentistry: Massapequa, NY."}
      />
      <SectionHeader
        headerPrimary={data.strapiTestimonials.Title}
        headerSecondary={data.strapiTestimonials.Subtitle}
      />
      <SectionComments showHeader={false} />
      <SectionReviewForm />
      <SectionAppointment noMarginTop={true} />
      <SectionMap />
    </Layout>
  )
}

export default TestimonialsPage
