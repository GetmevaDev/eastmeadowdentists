import React from "react"
import {graphql, useStaticQuery} from "gatsby"



const SectionWelcome = () => {

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              Section_Welcome {
                  Title
                  Content
              }
              Section_Welcome_Image {
                  publicURL
              }
          }
      }
  `)

  return(
    <div className={`section-welcome`}>
      <div className="container row">
        <div className={`img`}>
          <img src={data.strapiHomePage.Section_Welcome_Image.publicURL} alt="" />
        </div>
        <div className="content-box">
          <h3 className={`welcome-title`}>{data.strapiHomePage.Section_Welcome.Title}</h3>
          <p>{data.strapiHomePage.Section_Welcome.Content}</p>
        </div>

      </div>
    </div>
  )
}

export default SectionWelcome