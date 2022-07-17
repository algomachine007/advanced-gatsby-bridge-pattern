import { graphql } from "gatsby"

export const query = graphql`
  fragment FragmentBlog on ContentfulBlogs {
    __typename
    author {
      name
      node_locale
      blogs {
        title
        slug
        body {
          references {
            description
            gatsbyImage(width: 400)
          }
          raw
        }
        coverImages {
          gatsbyImage(width: 400)
        }
        author {
          blogs {
            id
          }
          avatar {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    title
    variant
  }
`
