import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import ReactMarkdown from "react-markdown"


const SectionQuestionTwo = () => {

const  data = useStaticQuery(graphql`
    {
        strapiEmergencyServices {
            What_should_I_do_if_I_have_a_dental_emergency
        }
    }
`)

  return(
    <section className={`section-question-two`}>
      <div className="container w1200">
        <h2 className={`section-title`}>What should I do if I have a dental emergency?</h2>
        <p className={`reviews_text`}>While dental emergencies aren't life-threatening, it’s a good idea to rapidly take preventive measures to improve your chances of a quick recovery. If you don’t take care of the issue in a timely manner, you may suffer from medical complications.</p>
        <div className={`border-left`}>
          <ReactMarkdown
          source={data.strapiEmergencyServices.What_should_I_do_if_I_have_a_dental_emergency}
          />
        </div>
        <p className={`reviews_text`}>When you experience a dental emergency, we strongly urge you to contact us as soon as you can. As we’ve mentioned, it’s important that you receive treatment as soon as possible. The sooner you receive treatment from our dental doctors, the better your chances of restoring your dental health.</p>
      </div>
    </section>
  )
}

export default SectionQuestionTwo