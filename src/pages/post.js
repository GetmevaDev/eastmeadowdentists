import React from "react"
import Layout from "../components/layout"
import SectionHeader from "../components/RepeatComponents/sectionHeader"
import SectionMap from "../components/RepeatComponents/sectionMap"
import SEO from "../components/seo"
import SectionBlogPage from "../components/Blog/SectionBlogPage"

const PostPage = props => {
  const { post } = props.pageContext
  return (
    <Layout>
      {post && (
        <>
          {post.SEO && <SEO seo={post.SEO} />}
          <SectionHeader headerPrimary={post.Title} headerSecondary="Blog" />
          <SectionBlogPage post={post} />
          <SectionMap />
        </>
      )}
    </Layout>
  )
}

export default PostPage
