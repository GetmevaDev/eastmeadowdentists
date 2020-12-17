import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const SectionInsurances = ({ insurancePage }) => {
  const data = useStaticQuery(graphql`
    {
      strapiAboutUs {
        Insurances {
          Name_Insurance
          id
        }
      }
    }
  `)

  return (
    <section className={`section-insurances`}>
      <h2 className={`title-section`}>{insurancePage.Content_Title}</h2>
      <p className={`reviews_text`}>{insurancePage.Content_Subtitle}</p>
      <div className="container w1200 row">
        {data.strapiAboutUs.Insurances.map(item => {
          return (
            <div key={item.id} className={`insurances-item`}>
              <h6>{item.Name_Insurance}</h6>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SectionInsurances
