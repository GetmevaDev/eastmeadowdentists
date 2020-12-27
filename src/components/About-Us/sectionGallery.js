import React from "react"
import { graphql, StaticQuery } from "gatsby"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles

import "swiper/swiper.scss"

import Arrow from "../../images/arrow.svg"
import ArrowActive from "../../images/arrow-active.svg"

class SectionGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      i: -1,
      show: false,
    }
  }

  addPopupClass(id) {
    this.setState({
      show: true,
      i: id,
    })
  }

  removeClass() {
    this.setState({
      show: !this.state.show,
    })
    console.log(this.state.show)
  }

  render() {
    SwiperCore.use([Navigation])
    return (
      <StaticQuery
        query={graphql`
          {
            strapiAboutUs {
              Gallery {
                id
                Photo {
                  childImageSharp {
                    fixed(width: 2000) {
                      src
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <section className={`section-gallery`}>
            <h2 className="title-section">Gallery</h2>
            <div className="container">
              <Swiper
                className={`box-gallery`}
                spaceBetween={60}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-prev",
                  prevEl: ".swiper-button-next",
                }}
                breakpoints={{
                  // when window width is >= 640px
                  667: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
              >
                {data.strapiAboutUs.Gallery.map((item, i) => {
                  return (
                    <SwiperSlide className={`block-gallery db`}>
                      <div
                        className={`container-block-gallery`}
                        onClick={this.addPopupClass.bind(this, i)}
                      >
                        <div className={`zoom`}></div>
                        <img
                          src={item.Photo.childImageSharp.fixed.src}
                          alt={""}
                        />
                      </div>
                    </SwiperSlide>
                  )
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
            </div>
            <div
              className={`gallery-close`}
              onClick={this.removeClass.bind(this)}
              style={{
                display: `${!this.state.show ? "none" : "block"}`,
              }}
            ></div>
            {data.strapiAboutUs.Gallery.map((item, i) => {
              return (
                <>
                  <div
                    className={`container-popup-image ${
                      this.state.i === i && this.state.show
                        ? "open-popup-gallery"
                        : " "
                    }`}
                  >
                    <img src={item.Photo.childImageSharp.fixed.src} alt={""} />
                  </div>
                </>
              )
            })}
          </section>
        )}
      />
    )
  }
}

export default SectionGallery
