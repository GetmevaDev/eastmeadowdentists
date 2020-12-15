import React from "react"
import SectionHeader from "../components/common/sectionHeader"
import SectionInsurances from "../components/Insurance/sectionInsurances"
import Layout from "../components/layout"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SEO from "../components/seo"

function InsurancePage() {
  return (
    <Layout>
      <SEO
        title={"All Smiles Dental Spa"}
        description={"Cosmetic & Implant Dentistry: Massapequa, NY."}
      />
      <SectionHeader
        headerPrimary="Insurance Information"
        headerSecondary="Flexible options"
      />
      <SectionInsurances />
      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default InsurancePage
