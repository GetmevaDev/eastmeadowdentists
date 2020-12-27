import { Link } from "gatsby"
import React, { useState, useRef, useEffect } from "react"

const NavbarExpand = ({ items, currentOpened, setCurrentOpened }) => {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (currentOpened != items.Link_Page) {
      setIsOpen(false)
    }
  }, [currentOpened])

  const onClick = link => {
    setCurrentOpened(link)
    setIsOpen(!isOpen)
  }

  return (
    <div className="mobile-dropdown">
      <ul className="dropdown-mobile">
        <Link
          className={`link-dropdown`}
          to={items.Is_Link ? items.Link_Page : "#"}
          onClick={() => onClick(items.Link_Page)}
        >
          {items.Name_Page}
        </Link>
        <div
          ref={dropdownRef}
          className={`dropdown ${isOpen ? "open" : "close"}`}
        >
          {items.children.map(({ group, children }) => (
            <div className="expand-ul">
              {group.Display_Name ? (
                <span className="dropdown-name">{group.Name_Page}</span>
              ) : null}
              {children.map(item => (
                <div className="expand-li">
                  <Link
                    to={`${items.Link_Page}${item.Link_Page}`}
                    className="expand-link"
                  >
                    {item.Name_Page}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default NavbarExpand
