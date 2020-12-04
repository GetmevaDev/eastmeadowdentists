import React from "react"
import {graphql, useStaticQuery} from "gatsby"



const SectionEmergencyDentistry = () =>{

  const data = useStaticQuery(graphql`
      {
          strapiEmergencyServices {
              Emergency_Dentistry
          }
      }
  `)

  return(
    <section className={`section-emergency-dentistry`}>
      <div className="container">
        <h2 className={'welcome-title'}>Emergency Dentistry</h2>
        <p>{data.strapiEmergencyServices.Emergency_Dentistry}</p>
      </div>
    </section>
  )
}


export default SectionEmergencyDentistry