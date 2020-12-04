import React from "react"
import {graphql, useStaticQuery} from "gatsby"


const SectionInsurances = () =>{

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

  return(
    <section className={`section-insurances`}>
      <h2 className={`title-section`}>Insurances We Accept</h2>
        <p className={`reviews_text`}>For your convenience, we accept a wide range of insurances. Take advantage of your insurance and maintain your dental health with regular visits. We also provide emergency dental procedures like root canals, crowns, tooth extractions, and more.</p>
      <div className="container w1200 row">
        {
          data.strapiAboutUs.Insurances.map(item => {

            return(
              <div key={item.id} className={`insurances-item`}>
                <h6>{item.Name_Insurance}</h6>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default SectionInsurances