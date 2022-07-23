import { graphql } from "gatsby"

export const query = graphql`
  fragment FragmentHero on ContentfulHero {
    __typename
    variant
    cta {
      hero {
        description
        id
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 70)
          title
          url
        }
        variant
      }
    }
    description
    title
    image {
      gatsbyImageData(
        quality: 90
        resizingBehavior: NO_CHANGE
        layout: FULL_WIDTH
        placeholder: BLURRED
      )
      title
      url
    }
  }
`
