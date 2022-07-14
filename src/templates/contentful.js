// here, we query for all the data in the app

import { graphql } from "gatsby"
import React from "react"

const ContentfulPageTemplate = ({ pageContext, data }) => {
  console.log("context", pageContext)
  console.log("page", data)
  return (
    <div>
      Layout Footer
      <h1>{pageContext.title}</h1>
    </div>
  )
}

export default ContentfulPageTemplate

export const ContentfulPageQuery = graphql`
  query ContentfulPageQuery($id: String!) {
    page: contentfulPage(id: { eq: $id }) {
      title
      id
      slug
      sections {
        id
        author {
          id
          blogs {
            body {
              references {
                title
                url
              }
            }
          }
        }
      }
    }
  }
`
