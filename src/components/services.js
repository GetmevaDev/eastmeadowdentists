import React from "react"
import Layout from "./layout"
import SectionHeader from "./RepeatComponents/sectionHeader"
import SEO from "./seo"
import SectionAppointment from "./RepeatComponents/sectionAppointment"
import SectionMap from "./RepeatComponents/sectionMap"
import SectionServiceInfo from "./Services/sectionServiceInfo"
import SectionServiceDoctors from "./Services/sectionServiceDoctors"

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
