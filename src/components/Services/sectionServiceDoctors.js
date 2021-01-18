import React from "react"
import Accordion from "./sectionServiceAccordion"
import { graphql, useStaticQuery } from "gatsby"
import { navigate } from "@reach/router"

const SectionServiceDoctors = () => {
  const doctors = useStaticQuery(graphql`
    {
      allStrapiOurDoctors {
        edges {
          node {
            Specialization
            Name
            Slug
            Photo_Avatar {
                url
                alternativeText
            }
          }
        }
      }
    }
  `)

  return (
    <section className="section-service-doctors">
      <div className="inner-width">
        <div class="inner">
          <h3>Meet the Doctors</h3>
          <div className="pers">
            {doctors.allStrapiOurDoctors.edges.map((doctor, i) => (
              <div className="per" key={i}>
                <div className="doc-img">
                  <img
                    src={doctor.node.Photo_Avatar[0].url}
                    alt={doctor.node.Photo_Avatar[0].alternativeText}
                  />
                </div>
                <div className="pe">
                  <p className="p-des">{doctor.node.Specialization}</p>
                  <p className="p-name">{doctor.node.Name}</p>
                </div>
                <div className="doc-more">
                  <button
                    className="btn-info"
                    onClick={() => navigate(`/team/${doctor.node.Slug}`)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="questions">
        <h3>Frequently Asked Questions</h3>
        <Accordion />
      </div>
    </section>
  )
}

export default SectionServiceDoctors
