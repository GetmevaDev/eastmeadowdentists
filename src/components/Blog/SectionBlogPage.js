import { navigate } from "@reach/router"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { formatDate } from "../../lib/helpers"
import SectionBlogCard from "./SectionBlogCard"

const SectionBlogPage = props => {
  const { post } = props

  const recentPosts = useStaticQuery(graphql`
    {
      allStrapiPosts(limit: 4, sort: { order: DESC, fields: createdAt }) {
        nodes {
          Body
          Slug
          Title
          Published_Date
        }
      }
    }
  `)

  return (
    <section className="blog-page">
      <div className="card-page-content-full">
        <div className="back-link" onClick={() => navigate(`/blog`)}>
          &larr; Back to articles
        </div>
      </div>
      <div className="card-page-content">
        <h6>{formatDate(post.Published_Date)}</h6>
        <h3>{post.Title}</h3>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: post.Body }}
          className="card-content-p"
        />
      </div>
      <div className="card-page-card">
        {recentPosts.allStrapiPosts.nodes.map(post => (
          <SectionBlogCard post={post} isReadMore={false} />
        ))}
      </div>
    </section>
  )
}

export default SectionBlogPage
