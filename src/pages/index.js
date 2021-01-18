import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionHeader from "../components/Home-Page-Components/sectionHeader"
import SectionOffer from "../components/Home-Page-Components/sectionOffer"
import SectionWelcome from "../components/Home-Page-Components/sectionWelcome"
import SectionComments from "../components/Home-Page-Components/sectionComment"
import SectionReason from "../components/Home-Page-Components/sectionReason"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionServices from "../components/Home-Page-Components/sectionServices"
import SectionTeam from "../components/RepeatComponents/sectionTeam"
import SectionMap from "../components/RepeatComponents/sectionMap"

import "../scss/main.scss"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const seo = useStaticQuery(graphql`
    {
      strapiHomePage {
        SEO {
          Description
          Title
        }
      }
    }
  `)
const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What type of procedures does All Smiles Dental Spa perform?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer all types of procedures from your routine preventative checkup to aesthetics, Invisalign, implant dentistry and sleep apnea appliances. It is our goal to make your visit with us an extremely pleasant one and to send you home with a beautiful and healthy smile."
    }
  },{
    "@type": "Question",
    "name": "What should I expect from my first visit?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Your first visit to All Smiles Dental Spa establishes a vital foundation for our relationship with you. During the first visit, we make sure to obtain important background information and give you time to get to know your dentist. The initial appointment is designed to get you better acquainted with all we offer as well as introduce you to our dentist and caring staff. We will review your medical and dental histories and evaluate your oral health. We will take digital x-rays of your teeth and explain to you whether or not you require cleaning or any other dental treatment."
    }
  },{
    "@type": "Question",
    "name": "What can I do to prevent tooth & gum decay and ensure a healthy mouth?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are several simple steps we recommend to all our patients :" +
          "                  - Brush your teeth twice a day in a circular motion with a soft bristled toothbrush aimed at the gum" +
          "              - Floss every night in an up and down motion while keeping the floss in a U-shape and against the tooth surface" +
          "          - Avoid smoking" +
          "          - Avoid sticky sugary foods" +
          "          - Eat a balanced diet" +
          "          - Use antiseptic and fluoride rinses as directed" +
          "          - Sealants placed on young permanent teeth"
}
}]
}
  return (
    <Layout>
      <SEO seo={seo.strapiHomePage.SEO} schemaMarkup={schema} />
      <SectionHeader />
      <SectionOffer />
      <SectionWelcome />
      <SectionComments />
      <SectionReason />
      <SectionAppointment />
      <SectionServices />
      <SectionTeam />
      <SectionMap />
    </Layout>
  )
}
export default IndexPage
