/** @jsx jsx */
import { jsx } from "theme-ui"
import { BlogPostList } from "./components"

export function BlogPageView({ posts, page, site }) {
  const [title] = page.title || "No title"
  const [description] = page.description || { text: "No description" }
  return (
    <div sx={{ variant: "page.container" }}>
      <div sx={{ variant: "page.hero" }}>
        <h1 sx={{ variant: "page.heading.one" }}>{title.text}</h1>
        <p sx={{ variant: "page.description" }}>{description.text}</p>
      </div>
      <div sx={{ variant: "page.section-divider" }} />
      <div sx={{ variant: "page.body.default" }}>
        <BlogPostList posts={posts} />
      </div>
    </div>
  )
}
