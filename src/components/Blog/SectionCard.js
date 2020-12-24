import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import SectionBlogCard from "./SectionBlogCard"

const SectionCard = props => {
  const { currentPage, numPages, posts } = props.pageContext

  console.log(props.pageContext)

  const generatePagination = () => {
    let pagination = []
    for (let idx = 1; idx <= numPages; idx++) {
      if (idx == 1) {
        pagination = [...pagination, <Link to="/blog">{idx}</Link>]
      } else {
        pagination = [
          ...pagination,
          <Link to={"/blog/page/" + idx}>{idx}</Link>,
        ]
      }
    }

    return pagination
  }

  return (
    <section className="blog-card">
      <div className="Card">
        {posts && posts.map(post => <SectionBlogCard post={post.node} />)}
      </div>
      <div className="pagination">
        <p>
          Page {currentPage} of {numPages}
        </p>
        <Link
          to={
            currentPage == 1 || currentPage == 2
              ? `/blog`
              : `/blog/page/${currentPage - 1}`
          }
        >
          &laquo;
        </Link>
        {generatePagination()}
        <Link
          to={
            currentPage == numPages
              ? `/blog/page/${currentPage}`
              : `/blog/page/${currentPage + 1}`
          }
        >
          &raquo;
        </Link>
      </div>
    </section>
  )
}

export default SectionCard
