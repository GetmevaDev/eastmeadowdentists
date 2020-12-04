import React from "react"
import {graphql, useStaticQuery} from "gatsby"



const SectionReason = () =>{


  const data = useStaticQuery(graphql`
      {
          allStrapiWhyChooseUses(limit: 3) {
              edges {
                  node {
                      Image {
                          publicURL
                      }
                      Title
                      Text
                  }
              }
          }
      }
  `)

  return(
    <section className={`section-reason`}>
      <h2 className="title-section">Why choose Us?</h2>
      <p className={`reviews_text`}>This site does everything you could possibly want it to do and not only that, beautifully carefully designed and extremely intuitive to use.</p>


      <div className="container row bg-container">
        {
          data.allStrapiWhyChooseUses.edges.map(item => {
            return(
              <div className={`card`}>
                <img src={item.node.Image.publicURL} alt="" />
                <h5>{item.node.Title}</h5>
                <p>{item.node.Text}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}


export default SectionReason