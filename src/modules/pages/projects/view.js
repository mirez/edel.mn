/** @jsx jsx */
import { jsx } from "theme-ui"

export function ProjectsPageView({ page }) {
  const [title] = page.title || "No title"
  const [description] = page.description || { text: "No description" }
  return (
    <div sx={{ variant: "page.container" }}>
      <div sx={{ variant: "page.hero" }}>
        <h1 sx={{ variant: "page.heading.one" }}>{title.text}</h1>
        <p sx={{ variant: "page.description" }}>{description.text}</p>
      </div>

      <div sx={{ variant: "page.body" }}>
        {/* <BlogPostList posts={posts} /> */}
      </div>
    </div>
  )
}
