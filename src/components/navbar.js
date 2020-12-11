import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Dropdown from "./dropdown"

const Navbar = () => {
  const [menu, setMenu] = useState([])
  const data = useStaticQuery(graphql`
    {
      allStrapiNavigationMenu {
        nodes {
          Header_Menu {
            id
            Name_Page
            Link_Page
            Link_Menu
            Is_Link
            Link_Group
            Display_Name
          }
        }
      }
    }
  `)

  useEffect(() => {
    let menuUnhandled = data.allStrapiNavigationMenu.nodes[0].Header_Menu
    let menuHandled = []

    menuUnhandled.forEach(page => {
      if (page.Is_Link && page.Link_Menu === null) {
        menuHandled = [...menuHandled, page]
      } else {
        let menuLinkGroups = menuUnhandled.filter(
          group => group.Link_Menu === page.Link_Page && !group.Is_Link
        )
        let menuLinkGroupsWithChildren = menuLinkGroups.map(group => {
          let groupItems = menuUnhandled.filter(
            item => item.Link_Group == group.Link_Page
          )

          return {
            group: group,
            children: groupItems,
          }
        })
        if (menuLinkGroupsWithChildren.length) {
          menuHandled = [
            ...menuHandled,
            { ...page, children: menuLinkGroupsWithChildren },
          ]
        }
      }
    })

    setMenu(menuHandled)
  }, [data.allStrapiNavigationMenu.nodes[0].Header_Menu])

  console.log(menu)

  return (
    <ul style={{ display: "flex" }} className={`menu-items`}>
      {menu.map(page => (
        <li key={page.id} className={`item-link-menu`}>
          {page.Is_Link ? (
            <Link
              className={`link-menu`}
              to={page.Is_Link ? page.Link_Page : "#"}
              activeClassName="active-page-link"
            >
              {page.Name_Page}
            </Link>
          ) : (
            <Dropdown items={page} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navbar
