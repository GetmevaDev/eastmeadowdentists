import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import CallIcon from "../images/call.svg"



const Call = () => {

  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Number_Phone
          }
      }
  `)

  return(
    <a className={`call`} href={`tel:${data.strapiContacts.Number_Phone}`}>
      <div className={`call_icon`}>
        <img src={CallIcon} alt="CallIcon" />
      </div>
      <span>{data.strapiContacts.Number_Phone}</span>
    </a>
  )
}

export default Call