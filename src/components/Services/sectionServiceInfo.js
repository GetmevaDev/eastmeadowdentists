import React from "react"
import Tabs from "react-responsive-tabs"
import "react-responsive-tabs/styles.css"
import { Style } from "react-style-tag"
import { Link } from "gatsby"

const SectionServiceInfo = ({ services, service }) => {
  const getTabs = () =>
    services.map(({ node }) => ({
      title: (
        <Link to={`/services${node.Link_services}/`}>{node.Name_services}</Link>
      ),
      getContent: () => (
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: node.Description_services }}
        />
      ),
      key: node.Link_services,
      tabClassName: "tab",
    }))

  return (
    <section className="section-service-info">
      <div className="container">
        <Tabs
          items={getTabs()}
          showMore={false}
          tabsWrapperClass="tabs-wrapper"
          panelClassName="tabs-panel"
          transformWidth={998}
          selectedTabKey={service.Link_services}
        />
        <Style>{`
          .tab { 
            @media only screen and (min-width: 1028px) {
              max-width: calc(100% / ${services.length}) !important;
              min-width: calc(100% / ${services.length}) !important;
            }
          }
        `}</Style>
      </div>
    </section>
  )
}

export default SectionServiceInfo
