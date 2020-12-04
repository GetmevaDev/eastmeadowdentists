import React from "react"
import {graphql, useStaticQuery} from "gatsby"

const SectionWelcomeAboutUs = () => {

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              Section_Welcome {
                  Content
                  Title
              }
          }
      }
  `)

  return(
    <section className={`section-welcome-about-us`}>
      <div className="container w1200">
        <h2 className={`welcome-title`}>
          {data.strapiHomePage.Section_Welcome.Title}
        </h2>
        <p>{data.strapiHomePage.Section_Welcome.Content}</p>
      </div>

    </section>
  )
}

export default SectionWelcomeAboutUs