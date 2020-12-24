import { Link } from "gatsby"
import React from "react"
import { formatDate } from "../../lib/helpers"

const SectionBlogCard = ({ post, isReadMore = true }) => {
  return (
    <div className="card-content">
      <h3>
        <Link to={`/${post.Published_Date}/${post.Slug}`}>{post.Title}</Link>
      </h3>
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: escapeHtml(post.Body) }}
        className="card-content-p"
      />
      {isReadMore ? (
        <div className="btn-blog">
          <button>
            <Link to={`/${post.Published_Date}/${post.Slug}`}>
              Read more...
            </Link>
          </button>
        </div>
      ) : (
        <div className="btn-blog">
          <p>{formatDate(post.Published_Date)}</p>
        </div>
      )}
    </div>
  )
}

function escapeHtml(unsafe) {
  return unsafe ? unsafe.replace(/<\/?[^>]+(>|$)/g, " ") : null
}

export default SectionBlogCard
