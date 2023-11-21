import React, {useEffect} from "react"
import useLocalStorage from "use-local-storage";
import ReactMarkdown from "react-markdown"
import {graphql, useStaticQuery} from "gatsby"
import CloseWarning from "../../images/CloseWarning.svg"
import * as  classes from "./popup.module.scss"



export function PopUp(){

    const data = useStaticQuery(graphql`
      {
          strapiPopUpWarning {
              Text
              Name_Link
              Link
              Switch_PopUp
              PhoneNumber
              MaxWidthBlock
          }
      }
  `)

    const {Text, Name_Link, Link, Switch_PopUp, PhoneNumber, MaxWidthBlock} = data.strapiPopUpWarning;

    const [cleanPopUp, setCleanPopUp] = useLocalStorage("PopUpOff", true);



    const removeCard = () => {
        setCleanPopUp(!cleanPopUp)
    }



    return(
        Switch_PopUp ?
            <div style={{
                opacity: cleanPopUp ?  1 : 0 ,
                pointerEvents: cleanPopUp  ? `auto` :  `none` ,
            }} className={classes.overlay}>
                <div style={{
                    maxWidth: MaxWidthBlock ? `${MaxWidthBlock}px` : 439,
                    transform: `scale(${cleanPopUp  ? 1 :  0 })`,
                    transition: '.5s',
                    display: 'flex',
                    flexDirection: 'column'
                }} className={classes.cardWarning}>
                    <button onMouseDown={removeCard} onMouseUp={removeCard} className={classes.buttonClose} type={`button`}>
                        <img src={CloseWarning} alt="" />
                    </button>
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: Text }}
                        className={classes.popUpText}
                    />
                    {/*<ReactMarkdown source={Text} />*/}
                    <div className={classes.linkContainer}>
                        <a className={classes.linkWarning} href={Link}>{Name_Link}</a>
                        <a className={classes.callWarning} href={`tel:${PhoneNumber}`}>Click to Call</a>
                    </div>

                </div>
            </div> : null
    )
}
