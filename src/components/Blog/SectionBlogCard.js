import { Link } from "gatsby"
import React from "react"
import { formatDate } from "../../lib/helpers"

const SectionBlogCard = ({ post, isReadMore = true }) => {
  return (
    <div className="card-content">
      <h3>
        <Link to={`/blog/${post.Slug}`}>{post.Title}</Link>
      </h3>
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: crushText(post.Body) }}
        className="card-content-p"
      />
        
      {console.log(typeof escapeHtml(post.Body))}
      {isReadMore ? (
        <div className="btn-blog">
          <button>
            <Link to={`/blog/${post.Slug}`}>
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

function crushText(text){
  return typeof text === "string" ? escapeHtml(text).substring(0,70).concat('...') : null
}

export default SectionBlogCard
