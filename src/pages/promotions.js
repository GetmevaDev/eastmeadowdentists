import React from "react"
import SectionPromotions from "../components/About-Us/sectionPromotions"
import SectionHeader from "../components/common/sectionHeader"
import Layout from "../components/layout"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SEO from "../components/seo"

function PromotionsPage() {
  return (
    <Layout>
      <SEO
        title={"All Smiles Dental Spa"}
        description={"Cosmetic & Implant Dentistry: Massapequa, NY."}
      />
      <SectionHeader
        headerPrimary="Promotions"
        headerSecondary="This site does everything you could possibly want it to do and not only that, beautifully carefully
        designed and extremely intuitive to use."
      />
      <SectionPromotions />
      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}

export default PromotionsPage
