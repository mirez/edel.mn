/** @jsx jsx */
import { jsx } from "theme-ui"
import { AboutPageContainer } from "./about"
import { ProjectsPageContainer } from "./projects"
import { ContactPageContainer } from "./contact"
import { BlogPageContainer } from "./blog"

const PageStrategy = {
  contact: ContactPageContainer,
  about: AboutPageContainer,
  projects: ProjectsPageContainer,
  blog: BlogPageContainer,
}

function PageTemplate(props) {
  return PageStrategy[props.type](props)
}

export default PageTemplate
