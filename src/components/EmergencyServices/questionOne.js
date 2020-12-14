import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const SectionQuestionOne = () => {
  const data = useStaticQuery(graphql`
    {
      strapiEmergencyServices {
        What_should_I_know_about_dental_emergencies
      }
    }
  `)

  return (
    <section className={`section-one`}>
      <div className="container bg w1200">
        <div className="box-question">
          <h2>What should I know about dental emergencies?</h2>
          <p>
            {
              data.strapiEmergencyServices
                .What_should_I_know_about_dental_emergencies
            }
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionQuestionOne
