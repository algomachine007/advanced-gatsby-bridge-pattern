// here, we query for all the data in the app

import { graphql, navigate } from "gatsby"
import React, { useEffect } from "react"
import { getContentfulBodySection } from "../base/getContentfulBody"

const ContentfulPageTemplate = ({ data, pageContext, ...rest }) => {
  console.log("section", data)
  console.log("pageContext", pageContext)
  console.log("rest props", rest)
  return <main>{data && data.sections?.map(getContentfulBodySection)}</main>
}

export default ContentfulPageTemplate

export const ContentfulPageQuery = graphql`
  query ContentfulPageQuery($id: String!) {
    page: contentfulPage(id: { eq: $id }) {
      __typename
      title
      id
      slug
      # sections {
      #   id
      #   author {
      #     id
      #     blogs {
      #       body {
      #         references {
      #           title
      #           url
      #         }
      #       }
      #     }
      #   }
      # }
      sections {
        ... on ContentfulBlogs {
          ...FragmentBlog
        }
      }

      # sections {
      #   author {
      #     avatar {
      #       gatsbyImageData(layout: FULL_WIDTH)
      #     }
      #     blogs {
      #       body {
      #         raw
      #       }
      #     }
      #   }
      # }
    }
  }
`
