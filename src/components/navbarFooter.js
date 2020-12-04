import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"



const NavbarFooter = () => {

  const data = useStaticQuery(graphql`
      {
          strapiNavigationMenu {
              Footer_Menu {
                  Name_Page
                  Link_Page
                  id
              }
          }
      }
  `)

return(
  <div className={`box-menu-footer`}>
    <h5>
      Menu
    </h5>
    <nav className={`footer-menu`}>
      <ul className="footer-menu-items">

        {
          data.strapiNavigationMenu.Footer_Menu.map(item => {
            return(
              <li className="footer-items">
                <Link to={item.Link_Page} className="footer-link">{item.Name_Page}</Link>
              </li>
            )
          })
        }

      </ul>
    </nav>
  </div>
)
}


export default NavbarFooter