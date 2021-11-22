import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Image from "../image"


const SectionWelcome = () => {

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              Findatopdoc {
                  Link
                  mobileImage: Image {
                      childImageSharp {
                        fixed(width: 300){
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                      }
                    }
                  } 
                  desktopImage: Image {
                      childImageSharp {
                       fixed(width: 400){
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                      }
                    }
                  }
              }
              Section_Welcome {
                  Title
                  Content
              }
              mobileImage: Section_Welcome_Image {
                childImageSharp {
                  fixed(width: 200){
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
              }
              desktopImage: Section_Welcome_Image {
                childImageSharp {
                  fixed(width: 400){
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
              }
          }
      }
  `)

  return(
    <div className={`section-welcome`}>
      <div className="container row">
        <div className={`img`}>
          <Image
          image={data.strapiHomePage.mobileImage.childImageSharp.fixed}
          desktopImage={data.strapiHomePage.desktopImage.childImageSharp.fixed}
          alt={`teeth-with-tooth-brush`}
          />
          {/*<img src={data.strapiHomePage.Section_Welcome_Image[0].url} alt={data.strapiHomePage.Section_Welcome_Image[0].alternativeText} />*/}
          {
            data.strapiHomePage.Findatopdoc && data.strapiHomePage.Findatopdoc !== null ?
              (
                <div className={`find-a-top-doc`} style={{
                  position: `absolute`,
                  bottom: 0,
                  right: `-62px`,
                }}>
                  <a href={data.strapiHomePage.Findatopdoc.Link}>
                    <Image
                      image={data.strapiHomePage.Findatopdoc.mobileImage.childImageSharp.fixed}
                      desktopImage={data.strapiHomePage.Findatopdoc.desktopImage.childImageSharp.fixed}
                      alt={`Findatopdoc`}
                    />
                    {/*<img style={{maxHeight: 219}} src={data.strapiHomePage.Findatopdoc.Image[0].url} alt={data.strapiHomePage.Findatopdoc.Image[0].alternativeText} />*/}
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