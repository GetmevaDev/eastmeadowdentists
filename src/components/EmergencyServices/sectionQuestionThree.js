import ReactMarkdown from "react-markdown"
import React from "react"
import {graphql, useStaticQuery} from "gatsby"


const SectionQuestionThree = () =>{

  const data = useStaticQuery(graphql`
      {
          strapiEmergencyServices {
              What_can_I_do_to_avoid_dental_emergencies
              Questions_images {
                  publicURL
              }
          }
      }
  `)

  return(
    <section className={`section-question-three`}>
      <div className="container row w1200">
        <div className="question-box">
          <h2>What can I do to avoid dental emergencies?</h2>
          <p>Being careful and cautious is the most typical way to avoid injury or accidents. Here are a few simple things you can do to prevent the type of circumstances that require emergency treatment.</p>
          <div className={`border-left`}>
            <ReactMarkdown
            source={data.strapiEmergencyServices.What_can_I_do_to_avoid_dental_emergencies}
            />
            </div>
          <p>When you experience a dental emergency, we strongly urge you to contact us as soon as you can. As we’ve mentioned, it’s important that you receive treatment as soon as possible. The sooner you receive treatment from our dental doctors, the better your chances of restoring your dental health.</p>

        </div>
        <div className={`box-question-img`}>
          <img src={data.strapiEmergencyServices.Questions_images.publicURL} alt="" />
        </div>
      </div>
    </section>
  )
}

export default SectionQuestionThree