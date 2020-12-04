import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "./navbar"
import LinkAppointment from "./appointmentLink"
import Button from "../images/burger.svg"
import Closes from "../images/close.svg"






class Header extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }


  toggleImg(){
    this.setState({
      show: !this.state.show
    })
  }


  render() {


    return(
      <StaticQuery
      query={graphql`
        {
            strapiHomePage {
                Logo {
                    publicURL
                }
            }
        }
    `}
      render={data => (
        <header
          style={{
            background: `#fff`,
          }}
        >
          <div
            className={`container`}
            style={{ margin: `0 auto`, }}
          >
            <div
              className={`box`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "35px",
                paddingBottom: "35px"
              }}>
              <Link to="/" className={`logo`}>
                <img src={data.strapiHomePage.Logo.publicURL} alt="" />
              </Link>
              <button className={`button_menu`} onClick={this.toggleImg.bind(this)}>
                <img style={{
                  opacity: `${this.state.show ? '0' : '1'}`
                }} className={`button`} src={Button} alt="" />
                <img style={{
                  opacity: `${this.state.show ? '1' : '0'}`
                }} className={`closes`} src={Closes} alt="" />
              </button>

              <div className={`adaptive-box ${this.state.show ? 'open_menu' : ''}`} style={{
                flexGrow: "0.5",
              }}>
                <div className={`adaptive-menu-container`}
                     style={{
                       display: "flex",
                       justifyContent: "space-between",
                     }}
                >

                  <Navbar />
                  <LinkAppointment
                  text={'MAKE AN APPOINTMENT'}
                  styles={{
                    textTransform: "uppercase",
                  }}
                  />
                </div>
              </div>


            </div>


          </div>
        </header>
      )}
      />

    )
  }



}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
