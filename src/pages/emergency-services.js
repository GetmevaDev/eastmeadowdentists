import React from "react"
import Layout from "../components/layout"
import SectionHeaderEmergencyServices from "../components/EmergencyServices/sectionHeaderEmergencyServices"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SectionEmergencyDentistry from "../components/EmergencyServices/sectionEmergencyDentistry"
import SectionQuestionOne from "../components/EmergencyServices/questionOne"
import SectionQuestionTwo from "../components/EmergencyServices/sectionQuestionTwo"
import SectionQuestionThree from "../components/EmergencyServices/sectionQuestionThree"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SEO from "../components/seo"


const EmergencyServices = () =>{

  return(
    <Layout>
      <SEO title={'All Smiles Dental Spa'} description={'Cosmetic & Implant Dentistry: Massapequa, NY.'} />
      <SectionHeaderEmergencyServices />
      <SectionEmergencyDentistry />
      <SectionQuestionOne />
      <SectionQuestionTwo />
      <SectionQuestionThree />
      <SectionAppointment />
      <SectionMap />
    </Layout>
  )
}


export default EmergencyServices