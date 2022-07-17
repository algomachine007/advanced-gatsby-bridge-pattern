import { graphql } from "gatsby"

export const query = graphql`
  fragment FragmentBlog on ContentfulBlogs {
    __typename
    id
    # name
    # label
    title

    # author {
    #   id
    #   blogs {
    #     body {
    #       references {
    #         title
    #         url
    #       }
    #     }
    #   }
    # }

    author {
      avatar {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      blogs {
        body {
          raw
        }
      }
    }
  }
`
