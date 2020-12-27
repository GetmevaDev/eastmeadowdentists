import { Link } from "gatsby"
import React, { useRef, useState } from "react"

const Dropdown = ({ items }) => {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <Link
      to="#"
      className="menu-container link-menu"
      onMouseEnter={onClick}
      onMouseLeave={onClick}
    >
      <span>{items.Name_Page}</span>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        {items.children.map(({ group, children }) => (
          <ul>
            {group.Display_Name ? (
              <span className="group-name">{group.Name_Page}</span>
            ) : null}
            {children.map(item => (
              <li>
                <Link to={`${items.Link_Page}${item.Link_Page}`}>
                  {item.Name_Page}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </Link>
  )
}
export default Dropdown
