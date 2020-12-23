import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SectionBlogCard from "./SectionBlogCard"

const SectionCard = () => {
  const posts = useStaticQuery(graphql`
    {
      allStrapiPosts(sort: { fields: createdAt, order: DESC }, limit: 6) {
        nodes {
          Title
          Slug
          Body
        }
        pageInfo {
          pageCount
          itemCount
          currentPage
          hasNextPage
          hasPreviousPage
          totalCount
          perPage
        }
      }
    }
  `)

  return (
    <section className="blog-card">
      <div className="Card">
        <SectionBlogCard />
        <SectionBlogCard />
        <SectionBlogCard />
        <SectionBlogCard />
        <SectionBlogCard />
        <SectionBlogCard />
        {/*   <div className="card-content">
          <h3>Dentist Near Courtyard by Marriott Westbury Long Island</h3>
          <p>
            Near last minute or emergency dental work now? Our office is located
            close by with walks welcome. Call or come in today.
          </p>
          <div className="btn-blog">
            <button>Read more...</button>
          </div>
        </div>

        <div className="card-content">
          <h3>Dentist Near Hofstra University</h3>
          <p>
            We accept the following dental plans provided by Hofstra University
            Delta Dental PPO / Premier
          </p>
          <div className="btn-blog">
            <button>Read more...</button>
          </div>
        </div>

        <div className="card-content">
          <h3>Dentist Near Nassau University</h3>
          <p>
            We accept the following dental insurance plans offered by Nassau
            University Healthplex PPO
          </p>
          <div className="btn-blog">
            <button>Read more...</button>
          </div>
        </div>

        <div className="card-content">
          <h3>Dentist Near Nassau Community College</h3>
          <p>
            We accept the following plans provided by NCC Empire Blue Cross Blue
            Shield PPO Dental Plan Healthplex PPO
          </p>
          <div className="btn-blog">
            <button>Read more...</button>
          </div>
        </div>

        <div className="card-content">
          <h3>Guardian Dentist in East Meadow</h3>
          <p>
            We accept the following dental plans provided by Hofstra University
            Delta Dental PPO / Premier
          </p>
          <div className="btn-blog">
            <button>Read more...</button>
          </div>
        </div>
        <div className="card-content">
          <h3>Delta Dental Dentist In East Meadow, NY</h3>
          <p>
            We accept the following dental insurance plans offered by Nassau
            University Healthplex PPO
          </p>
          <div className="btn-blog">
            <button>Read more...</button>
          </div>
        </div> */}
      </div>
      <div className="pagination">
        <p>Page 1 of 3</p>
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">&raquo;</a>
      </div>
    </section>
  )
}

export default SectionCard
