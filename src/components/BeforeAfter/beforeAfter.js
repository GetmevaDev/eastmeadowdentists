import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const TeethComponent = () => {
  const teeth = useStaticQuery(graphql`
    {
      strapiGallerybBeforeAfter {
        GalleryList {
        text
          img {
            alternativeText
            url
          }
        }
      }
    }
  `)

  console.log(teeth)

  return (
    <div className="container">
      <div className={`gallery__main`}>
      {
        teeth.strapiGallerybBeforeAfter.GalleryList.map((item, index) => (

            <div key={index} className={`picture`}>
              <img src={item.img[0].url} alt={item.img[0].alternativeText}/>
                <p className={`gallery__text`}>{item.text}</p>
          </div>
        ))
      }
      </div>
      {/*{teeth.allStrapiGallerybBeforeAfter.edges.map((item, index) => (*/}
      {/*  <div className="gallery__main" key={index}>*/}
      {/*    <div className="gallery__left">*/}
      {/*      {item.node.left.map((left, index) => (*/}
      {/*        <div className="gallery__left-inner" key={index}>*/}
      {/*          <img*/}
      {/*            className="gallery__right--img"*/}
      {/*            src={left.img[0].url}*/}
      {/*            alt=""*/}
      {/*            key={index}*/}
      {/*          />*/}
      {/*          <span className="gallery__text">{left.text}</span>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*    <div className="gallery__right">*/}
      {/*      {item.node.right.map((right, index) => (*/}
      {/*        <div className="gallery__right-inner" key={index}>*/}
      {/*          <img*/}
      {/*            className="gallery__left--img"*/}
      {/*            src={right.img[0].url}*/}
      {/*            alt=""*/}
      {/*          />*/}

      {/*          <span className="gallery__text">{right.text}</span>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  )
}

export default TeethComponent
