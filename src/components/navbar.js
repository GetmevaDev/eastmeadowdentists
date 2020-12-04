import { Link } from "gatsby"
import {graphql, useStaticQuery} from "gatsby"
import React from "react"


const Navbar = () => {

  const data = useStaticQuery(graphql`
      {
          allStrapiNavigationMenu {
              nodes {
                  Header_Menu {
                      id
                      Name_Page
                      Link_Page
                  }
              }
          }
      }
  `)


  return(
    <ul style={{display: "flex"}} className={`menu-items`}>
      {
        data.allStrapiNavigationMenu.nodes[0].Header_Menu.map(page => (
          <li key={page.id} className={`item-link-menu`}>
            <Link className={`link-menu`} to={page.Link_Page} activeClassName="active-page-link">
              {page.Name_Page}
            </Link>
          </li>
        ))
      }

    </ul>
  )
}


export default Navbar
