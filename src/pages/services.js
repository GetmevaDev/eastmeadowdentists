import React from "react"
import Layout from "../components/layout"
import SectionHeader from "../components/RepeatComponents/sectionHeader"
import SEO from "../components/seo"
import SectionAppointment from "../components/RepeatComponents/sectionAppointment"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SectionServiceInfo from "../components/Services/sectionServiceInfo"
import SectionServiceDoctors from "../components/Services/sectionServiceDoctors"

function ServicesPage(props) {
  const { services, service } = props.pageContext

  return (
    <Layout>
      {services && (
        <>
          {service.SEO && <SEO seo={service.SEO} />}
          <SectionHeader
            headerPrimary={service.Name_services}
            headerSecondary="Our Services"
          />
          <SectionServiceInfo services={services} service={service} />
          <SectionServiceDoctors />
          <SectionAppointment />
          <SectionMap />
        </>
      )}
    </Layout>
  )
}

export default ServicesPage
