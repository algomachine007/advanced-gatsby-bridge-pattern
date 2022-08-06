// here, we query for all the data in the app

import { graphql, navigate } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/containers/Layout"
import { getContentfulBodySection } from "../base/getContentfulBody"
import "./../base/styles/main.scss"

const ContentfulPageTemplate = ({ data, pageContext }) => {
  return (
    <Layout>{data && data.page.sections.map(getContentfulBodySection)}</Layout>
  )
}

export default ContentfulPageTemplate

export const ContentfulPageQuery = graphql`
  query ContentfulPageQuery($id: String!) {
    page: contentfulPage(id: { eq: $id }) {
      __typename
      title
      id
      slug

      sections {
        ... on ContentfulBlogs {
          ...FragmentBlog
        }
        ... on ContentfulHero {
          ...FragmentHero
        }
      }
    }
  }
`
