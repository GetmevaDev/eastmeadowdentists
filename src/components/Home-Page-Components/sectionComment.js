import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/swiper.scss';

import Star from "../../images/star.svg"
import Arrow from "../../images/arrow.svg"
import ArrowActive from "../../images/arrow-active.svg"


const SectionComments = () => {


  const data = useStaticQuery(graphql`
      {
          allStrapiComments(limit: 3) {
              edges {
                  node {
                      Photo {
                          childImageSharp {
                              fixed {
                                  src
                              }
                          }
                      }
                      Name
                      Rating
                      Comment
                      the_comment_came_from {
                          childImageSharp {
                              id
                          }
                          publicURL
                      }
                  }
              }
          }
          commentVideo: allStrapiCommetsVideos(limit: 2) {
              edges {
                  node {
                      Link_video
                      Name
                      Rating
                      the_comment_came_from {
                          publicURL
                      }
                  }
              }
          }
      }
  `)
  SwiperCore.use([Navigation]);
  return(
    <section className={`section-comments`}>
            <h2 className="title-section">What people say</h2>
            <p className={`reviews_text`}>This site does everything you could possibly want it to do and not only that, beautifully carefully designed and extremely intuitive to use.</p>
      <div className="container">
        <div className="box-comment row">
            {
                data.allStrapiComments.edges.map(item => {
                    return(
                      <div className={`block-comment fb dn`}>
                        <img src={item.node.Photo.childImageSharp.fixed.src} className={`portrait`} alt={''} />
                        <h5 className={`name`}>{item.node.Name}</h5>
                        <div className="rating">
                          {

                              Array.from(Array(item.node.Rating), (item, i) => {
                                return (<span key={i}>
                                  <img src={Star} alt="star" />
                                </span>)
                              })


                          }
                        </div>

                        <p className={`comment`}>{item.node.Comment}</p>
                        <img className={`google`} src={item.node.the_comment_came_from.publicURL} alt="" />
                      </div>
                    )
                })
            }
        </div>
        <Swiper
          className={`box-comment`}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next',
          }}
          breakpoints={{
            // when window width is >= 640px
            667: {
              slidesPerView: 2,
            },
          }}
        >

            {
              data.allStrapiComments.edges.map(item => {
                return(
                  <SwiperSlide className={`block-comment db`}>
                    <img src={item.node.Photo.childImageSharp.fixed.src} className={`portrait`} alt={''} />
                    <h5 className={`name`}>{item.node.Name}</h5>
                    <div className="rating">
                      {

                        Array.from(Array(item.node.Rating), (item, i) => {
                          return (<span key={i}>
                                  <img src={Star} alt="star" />
                                </span>)
                        })


                      }
                    </div>

                    <p className={`comment`}>{item.node.Comment}</p>
                    <img className={`google`} src={item.node.the_comment_came_from.publicURL} alt="" />
                  </SwiperSlide>
                )
              })
            }
          <button className="swiper-button-next">
            <img src={Arrow} alt="" />
            <img src={ArrowActive} alt="" />
          </button>
          <button className="swiper-button-prev">
            <img src={Arrow} alt="" />
            <img src={ArrowActive} className={`rotate`} alt="" />
          </button>


        </Swiper>

        <div className={`box-comment_video row`}>
          {
            data.commentVideo.edges.map(item => {
              return(
                <div className={`block-comment_video`}>

                  <div className="container-video-comment">
                    <iframe width="100%" height="100%" src={item.node.Link_video} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                  </div>

                  <div className={`row`}>
                    <div className="name_and_rating">
                        <h4 className={`name`}>{item.node.Name}</h4>
                      <div className={`stars_comment-video`}>
                        {

                          Array.from(Array(item.node.Rating), (item, i) => {
                            return (<span key={i}>
                                  <img src={Star} alt="star" />
                                </span>)
                          })


                        }
                      </div>

                    </div>
                    <img src={item.node.the_comment_came_from.publicURL} alt="" />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default SectionComments