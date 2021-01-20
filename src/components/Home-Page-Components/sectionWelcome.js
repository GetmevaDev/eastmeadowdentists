import React from "react"
import {graphql, useStaticQuery} from "gatsby"



const SectionWelcome = () => {

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              Findatopdoc {
                  Link
                  Image {
                      url
                      alternativeText
                  }
              }
              Section_Welcome {
                  Title
                  Content
              }
              Section_Welcome_Image {
                  url
                  alternativeText
              }
          }
      }
  `)

  return(
    <div className={`section-welcome`}>
      <div className="container row">
        <div className={`img`}>
          <img src={data.strapiHomePage.Section_Welcome_Image[0].url} alt={data.strapiHomePage.Section_Welcome_Image[0].alternativeText} />
          {
            data.strapiHomePage.Findatopdoc && data.strapiHomePage.Findatopdoc !== null ?
              (
                <div className={`find-a-top-doc`} style={{
                  position: `absolute`,
                  bottom: 0,
                  right: `-62px`,
                }}>
                  <a href={data.strapiHomePage.Findatopdoc.Link}>
                    <img style={{maxHeight: 219}} src={data.strapiHomePage.Findatopdoc.Image[0].url} alt={data.strapiHomePage.Findatopdoc.Image[0].alternativeText} />
                  </a>
                </div>


              ) : null
          }
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