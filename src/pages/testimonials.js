import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionHeader from "../components/RepeatComponents/sectionHeader"
import SectionComments from "../components/Home-Page-Components/sectionComment"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"

import SectionReviewForm from "../components/Testimonials/sectionReviewForm"


function TestimonialsPage() {
  const data = useStaticQuery(graphql`
    {
      strapiTestimonials {
        Subtitle
        Title
        SEO {
          Title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO seo={data.strapiTestimonials.SEO} />
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
