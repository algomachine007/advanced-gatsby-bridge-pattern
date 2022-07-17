import { graphql } from "gatsby"

export const query = graphql`
  fragment FragmentBlogs on ContentfulBlogs {
    __typename
    id
    name
    label
    title

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
`
