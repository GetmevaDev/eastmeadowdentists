import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Image from "../image"

import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles


import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"
import "swiper/components/effect-fade/effect-fade.scss"
import Star from "../../images/star.svg"
import Arrow from "../../images/arrow.svg"
import ArrowActive from "../../images/arrow-active.svg"
import Avatar from "../../images/avatar.png"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const SectionComments = ({ showHeader = true }) => {
  const data = useStaticQuery(graphql`
    {
      allStrapiComments {
        edges {
          node {
           mobileImage: Photo {
                 childImageSharp {
                  fixed(width: 80){
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                      }
              }
            }
           desktopImage: Photo {
               childImageSharp {
                  fixed(width: 80){
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                      }
              }
            }
            Shown
            Name
            Rating
            Comment
          mobileImageGoogle: the_comment_came_from {
             childImageSharp {
                  fixed(width: 80){
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                      }
              }
            }  
           desktopImageGoogle: the_comment_came_from {
            childImageSharp {
                  fixed(width: 80){
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                      }
              }
            }
          }
        }
      }
      commentVideo: allStrapiCommetsVideos {
        edges {
          node {
            Link_video
            Name
            Rating
          mobileImageGoogle: the_comment_came_from {
               childImageSharp {
                  fixed(width: 80){
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                      }
              }
            }
            desktopImageGoogle: the_comment_came_from {
               childImageSharp {
                  fixed(width: 80){
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                      }
              }
            }
          }
        }
      }
        TitleSection: strapiHomePage {
            Section_Comment {
                Text
                Title
            }
        }
    }
  `)
  SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])


  return (
    <section className={`section-comments ${showHeader ? "show-header" : ""}`}>
      {showHeader && (
        <>
          <h2 className="title-section">{data.TitleSection.Section_Comment.Title}</h2>
          <p className={`reviews_text`}>
            {data.TitleSection.Section_Comment.Text}
          </p>
        </>
      )}
      <div className="container">
        <Swiper
          className={`box-comment`}
          slidesPerView={1}
          watchSlidesVisibility={true}
          watchSlidesProgress={true}
          // navigation={{
          //   nextEl: ".swiper-button-prev",
          //   prevEl: ".swiper-button-next",
          // }}
          breakpoints={{
            // when window width is >= 640px
            992: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
          }}
        >
          {data.allStrapiComments.edges.map(item => {
            if (item.node.Shown) {
              return (
                <SwiperSlide className={`block-comment fb dn`}>
                  {!item.node.Photo ? (
                    <Image
                    image={item.node.mobileImage.childImageSharp.fixed}
                    desktopImage={item.node.desktopImage.childImageSharp.fixed}
                    alt={`Photo`}
                    className={`portrait`}
                    />

                    // <img
                    //   src={item.node.Photo[0].url}
                    //   className={`portrait`}
                    //   alt={item.node.Photo[0].alternativeText}
                    // />
                  ) : (
                    <img src={Avatar} className={`portrait`} alt={""} />
                  )}
                  <h5 className={`name`}>{item.node.Name}</h5>
                  <div className="rating">
                    {Array.from(Array(item.node.Rating), (item, i) => {
                      return (
                        <span key={i}>
                          <img src={Star} alt="star" />
                        </span>
                      )
                    })}
                  </div>

                  <p className={`comment`}>{item.node.Comment}</p>
                  {item.node.the_comment_came_from || (
                    // <img
                    //   className={`google`}
                    //   src={item.node.the_comment_came_from[0].url}
                    //   alt={item.node.the_comment_came_from[0].alternativeText}
                    // />
                    <Image
                      image={item.node.mobileImageGoogle.childImageSharp.fixed}
                      desktopImage={item.node.desktopImageGoogle.childImageSharp.fixed}
                      alt={`Photo`}
                      className={`google`}
                    />
                  )}
                </SwiperSlide>
              )
            } else return null
          })}
          {/* <button className="swiper-button-next">
            <img src={Arrow} alt="" />
            <img src={ArrowActive} alt="" />
          </button>
          <button className="swiper-button-prev">
            <img src={Arrow} alt="" />
            <img src={ArrowActive} className={`rotate`} alt="" />
          </button> */}
        </Swiper>

        <div className={`box-comment_video row`}>
          <Swiper
            className={`box-comment--videos`}
            slidesPerView={1}
            spaceBetween={50}
            watchSlidesVisibility={true}
            watchSlidesProgress={true}
            // navigation={{
            //   nextEl: ".swiper-button-prev",
            //   prevEl: ".swiper-button-next",
            // }}
            breakpoints={{
              // when window width is >= 640px
              700: {
                slidesPerView: 2,
              },
            }}
          >
          {data.commentVideo.edges.map(item => {
            return (
              <SwiperSlide className={`block-comment_video`}>
                <div className={`container-slide`}>
                  <div className="container-video-comment">
                    {/*<iframe*/}
                    {/*loading={`lazy`}*/}
                    {/*width="100%"*/}
                    {/*height="100%"*/}
                    {/*src={item.node.Link_video}*/}
                    {/*frameBorder="0"*/}
                    {/*allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                    {/*allowFullScreen*/}
                    {/*/>*/}
                    <LiteYouTubeEmbed
                    id={item.node.Link_video}
                    iframeClass={`iframeYoutube`}
                    />
                  </div>

                  <div className={`row`}>
                    <div className="name_and_rating">
                      <h4 className={`name`}>{item.node.Name}</h4>
                      <div className={`stars_comment-video`}>
                        {Array.from(Array(item.node.Rating), (item, i) => {
                          return (
                            <span key={i}>
                              <img src={Star} alt="star" />
                            </span>
                          )
                        })}
                      </div>
                    </div>
                    {item.node.the_comment_came_from || (
                      <Image
                        image={item.node.mobileImageGoogle.childImageSharp.fixed}
                        desktopImage={item.node.desktopImageGoogle.childImageSharp.fixed}
                        alt={`google`}
                      />
                      // <img
                      //   src={item.node.the_comment_came_from.publicURL}
                      //   alt=""
                      // />
                    )}
                  </div>
                </div>



              </SwiperSlide>
            )
          })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SectionComments