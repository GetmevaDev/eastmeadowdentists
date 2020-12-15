import React from "react"
import SectionHeader from "../components/common/sectionHeader"
import SectionComments from "../components/Home-Page-Components/sectionComment"
import Layout from "../components/layout"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SEO from "../components/seo"
import SectionReviewForm from "../components/Testimonials/sectionReviewForm"

function TestimonialsPage() {
  return (
    <Layout>
      <SEO
        title={"All Smiles Dental Spa"}
        description={"Cosmetic & Implant Dentistry: Massapequa, NY."}
      />
      <SectionHeader
        headerPrimary="Testimonials"
        headerSecondary="What people say"
      />
      <SectionComments showHeader={false} />
      <SectionReviewForm />
      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default TestimonialsPage
