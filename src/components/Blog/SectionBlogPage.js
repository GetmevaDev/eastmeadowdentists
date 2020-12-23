import React from "react"
import SectionBlogCard from "./SectionBlogCard"

const SectionBlogPage = () => {
  return (
    <section className="blog-page">
      <div className="card-page-content">
        <h6>30 December 2020</h6>
        <h3>Dentist Near Courtyard by Marriott Westbury Long Island</h3>
        <p>
          Near last minute or emergency dental work now? Our office is located
          close by with walks welcome. Call or come in today.
        </p>
      </div>
      <div className="card-page-card">
        <SectionBlogCard />
        <SectionBlogCard />
        <SectionBlogCard />
        <SectionBlogCard />
      </div>
    </section>
  )
}

export default SectionBlogPage
