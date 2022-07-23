import { graphql } from "gatsby"

export const query = graphql`
  fragment FragmentLandingPage on ContentfulHero {
    __typename
  }
`
