import React from "react"

function SectionHeader({ headerPrimary, headerSecondary }) {
  return (
    <section className={`section-header-about-us header-centered`}>
      <div className="container w1200">
        <h2>{headerPrimary}</h2>
        <h3>{headerSecondary}</h3>
      </div>
    </section>
  )
}

export default SectionHeader
