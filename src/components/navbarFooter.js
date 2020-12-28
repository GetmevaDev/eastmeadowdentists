import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const NavbarFooter = () => {
  const data = useStaticQuery(graphql`
    {
      strapiNavigationMenu {
        Header_Menu {
          Display_Name
          Is_Link
          Link_Group
          Link_Menu
          Link_Page
          Name_Page
        }
      }
    }
  `)

  return (
    <div className={`box-menu-footer`}>
      <h5>Menu</h5>
      <nav className={`footer-menu`}>
        <ul className="footer-menu-items">
          {data.strapiNavigationMenu.Header_Menu.map(item => {
            if (item.Link_Menu === null)
              return (
                <li className="footer-items">
                  <Link to={item.Link_Page} className="footer-link">
                    {item.Name_Page}
                  </Link>
                </li>
              )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default NavbarFooter
