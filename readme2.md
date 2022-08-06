const path = require('path');
const validateNumberOfIndexPages = require('./src/helpers/validateNumberOfIndexPages');

const pageTemplate = path.resolve('./src/templates/page.js');
const blogTemplate = path.resolve('./src/templates/blog.js');

const createContentfulPages = async ({ createPage, graphql }) => {
const result = await graphql(
` ## reusable fragments
fragment fileFragment on ContentfulAsset {
file {
url
fileName
}
}
fragment svgInlineFragment on ContentfulAsset {
svg {
content
}
}

      fragment ctaFragment on ContentfulButton {
        text
        link
        type
      }

      fragment contentfulBlogPost on ContentfulBlogPost {
        id
        richTextContent {
          raw
        }
        subtitle
        title
        topics
        authorPosition
        authorName
        authorPicture {
          description
          fluid(maxWidth: 900, quality: 100) {
            src
            srcSet
            srcSetWebp
            sizes
          }
          title
        }
      }

      fragment contentfulAssetFragment on ContentfulAsset {
        ...fileFragment
        fluid(quality: 80, maxWidth: 1000) {
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }

      fragment contentfulMenuColumnEntry on ContentfulMenuColumnEntry {
        id
        linkText
        description
        externalUrl
        page {
          path
        }
        image {
          ...contentfulAssetFragment
        }
      }

      ## query
      {
        allContentfulPage {
          nodes {
            path
            title
            isIndex
            useWhiteHeaderBackground
            showIntercom
            metaTags {
              tagName
              content
            }
            showTypeformInHero
            typeformUrl
            triggerDownload
            urlToDownload
            itemToDownload {
              file {
                url
              }
            }
            sections {
              ... on Node {
                id
                __typename
                ... on ContentfulPricing {
                  title
                  pricingCards {
                    ... on ContentfulPricingCard {
                      accentColor
                      title
                      subtitle
                      cost
                      ctaRedirectUrl
                      ctaText
                      users
                      integrations
                      features
                    }
                  }
                  includeTransactionPricing
                  transactionPricingTitle
                  transactionPricingItems {
                    ... on ContentfulTransactionPricingItem {
                      item
                      price
                    }
                  }
                }
                ... on ContentfulFeatureList {
                  title
                  subtitle {
                    subtitle
                  }
                  features {
                    icon {
                      ...contentfulAssetFragment
                    }
                    text {
                      text
                    }
                    title
                  }
                }
                ... on ContentfulBlogPost {
                  ...contentfulBlogPost
                }
                ... on ContentfulFaq {
                  header
                  entries {
                    heading
                    text {
                      text
                    }
                  }
                }
                ... on ContentfulLibrary {
                  libraryId
                  libraryTitle
                  cards {
                    mainImage {
                      ...contentfulAssetFragment
                    }
                    topics
                    title
                    description
                    page {
                      path
                    }
                    externalUrl
                    authorsName
                    authorsPicture {
                      ...contentfulAssetFragment
                    }
                    authorsRole
                  }
                }
                ... on ContentfulRichTextHero {
                  title
                  template
                  text {
                    raw
                    references {
                      ... on ContentfulAsset {
                        contentful_id
                        __typename
                        file {
                          url
                          fileName
                          contentType
                        }
                        title
                        ...contentfulAssetFragment
                      }
                    }
                  }
                  textAlignment
                  heroModel
                  colorway
                  icon {
                    ...svgInlineFragment
                  }
                  image {
                    ...contentfulAssetFragment
                  }
                }
                ... on ContentfulHero {
                  productScreenYouTubeVideoId
                  productScreenVideoPlayButtonImage {
                    ...svgInlineFragment
                  }
                  heading
                  subheading {
                    childMarkdownRemark {
                      html
                    }
                  }
                  callToAction {
                    ...ctaFragment
                  }
                  secondaryCallToAction {
                    ...ctaFragment
                    lightAppearance
                    arrow {
                      ...svgInlineFragment
                    }
                  }
                  inputPlaceholder
                  leftAlignedHero
                  image {
                    ...contentfulAssetFragment
                  }
                  productScreenImage {
                    fluid(maxWidth: 900, quality: 100) {
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      sizes
                    }
                    file {
                      url
                      contentType
                    }
                  }
                  isScheduleADemoConfirmationPage
                }
                ... on ContentfulFeatureMultiple {
                  heading
                  featureMultipleSubheading: subheading
                  cards {
                    id
                    icon {
                      ...svgInlineFragment
                    }
                    heading
                    description
                    image {
                      ...contentfulAssetFragment
                    }
                    link {
                      ...ctaFragment
                    }
                  }
                }
                ... on ContentfulComparisonPanel {
                  heading
                  comparisonSubheading: subheading
                  table {
                    columns {
                      value
                      type
                    }
                    rows {
                      cells {
                        string
                        boolean
                        type
                      }
                    }
                  }
                }
                ... on ContentfulTestimonialLogoBrick {
                  heading
                  logos {
                    id
                    ...fileFragment
                    fixed(height: 24) {
                      width
                      height
                      src
                      srcSet
                    }
                  }
                  darkBackground
                }
                ... on ContentfulFeatureSingle {
                  heading
                  subheading {
                    childMarkdownRemark {
                      html
                    }
                  }
                  icon {
                    ...svgInlineFragment
                  }
                  image {
                    ...contentfulAssetFragment
                  }
                  button {
                    ...ctaFragment
                  }
                  secondaryButton {
                    ...ctaFragment
                  }
                  imageOnRight
                  wideFeature
                  whiteBackground
                  productScreenYouTubeVideoId
                  productScreenVideoPlayButtonImage {
                    ...svgInlineFragment
                  }
                }
                ... on ContentfulIntegrations {
                  integrationHeading: heading {
                    raw
                  }
                  subheading {
                    subheading
                  }
                  cards {
                    id
                    image {
                      ...contentfulAssetFragment
                    }
                    heading
                    subheading
                    linkUrl
                    linkText
                  }
                }
                ... on ContentfulDeveloperHero {
                  heading
                  subheading {
                    subheading
                  }
                  code {
                    ...contentfulAssetFragment
                  }
                  button {
                    ...ctaFragment
                    lightAppearance
                  }
                  light
                }
                ... on ContentfulDeeperDive {
                  heading
                  light
                  cards {
                    id
                    image {
                      ...contentfulAssetFragment
                    }
                    heading
                    deeperDiveText: text {
                      text
                    }
                    link {
                      ...ctaFragment
                    }
                  }
                }
                ... on ContentfulResultsComparison {
                  heading
                  resultsComparisonSubheading: subheading
                  cards {
                    id
                    image {
                      ...contentfulAssetFragment
                    }
                    number
                    text
                  }
                }
                ... on ContentfulResultsGraphics {
                  heading
                  resultsGraphicsSubheading: subheading
                  whiteBackground
                  cards {
                    id
                    heading
                    subheading
                    image {
                      ...contentfulAssetFragment
                    }
                  }
                }
                ... on ContentfulTestimonialFeatured {
                  icon {
                    ...svgInlineFragment
                  }
                  image {
                    ...contentfulAssetFragment
                  }
                  companyLogo {
                    ...fileFragment
                    fixed(height: 25) {
                      width
                      height
                      src
                      srcSet
                    }
                  }
                  clientName
                  companyRole
                  quote {
                    quote
                  }
                  colorway
                }
                ... on ContentfulDemo {
                  heading
                  cards {
                    id
                    text
                    image {
                      ...contentfulAssetFragment
                    }
                  }
                  inputPlaceholder
                  callToAction {
                    ...ctaFragment
                    lightAppearance
                  }
                  secondaryButton {
                    ...ctaFragment
                    lightAppearance
                    arrow {
                      ...svgInlineFragment
                    }
                  }
                  light
                }
                ... on ContentfulPullQuote {
                  clientName
                  clientRole
                  clientCompany
                  quote {
                    quote
                  }
                  avatar {
                    ...contentfulAssetFragment
                  }
                }
                ... on ContentfulHowItWorksList {
                  title
                  subTitle
                  richText {
                    raw
                  }
                  listItems {
                    id
                    text
                    image {
                      ...contentfulAssetFragment
                    }
                  }
                  fullWidth
                  diagram {
                    ...contentfulAssetFragment
                  }
                  productScreenYouTubeVideoId
                  productScreenVideoPlayButtonImage {
                    ...contentfulAssetFragment
                  }
                }
                ... on ContentfulTeam {
                  title
                  teamEntries {
                    id
                    picture {
                      ...contentfulAssetFragment
                    }
                    name
                    title
                  }
                }

                # various about us, partners, etc.
                ... on ContentfulFeatureDouble {
                  heading
                  featureDoubleSubheading: subheading
                  features {
                    id
                    heading
                    description {
                      description
                    }
                    lightImage {
                      ...contentfulAssetFragment
                    }
                    darkImage {
                      ...contentfulAssetFragment
                    }
                  }
                }
                ... on ContentfulEmbededTypeform {
                  typeformUrl
                  height
                  buttonText
                  opacity
                  hideFooter
                  hideHeaders
                }
                # changelog stuff
                ... on ContentfulFreeTextSection {
                  text {
                    raw
                    references {
                      ... on ContentfulAsset {
                        contentful_id
                        __typename
                        file {
                          url
                          fileName
                          contentType
                        }
                        title
                        ...contentfulAssetFragment
                      }
                    }
                  }
                }
                ... on ContentfulLandingPageForm {
                  formSuccessRedirectSlug
                  landingPageFormId
                  formTitle {
                    childMarkdownRemark {
                      html
                    }
                  }
                  formSubTitle {
                    childMarkdownRemark {
                      html
                    }
                  }
                  formSchema {
                    payload
                  }
                  formUISchema {
                    payload
                  }
                  hiddenFields {
                    key
                    value
                  }
                  formSubmitButton {
                    text
                  }
                  formDisclaimer {
                    childMarkdownRemark {
                      html
                    }
                  }
                  hero {
                    raw
                  }
                  heroLeft
                  heroTop
                }
              }
            }
          }
        }
        logo: contentfulAsset(title: { eq: "Logo" }) {
          ...svgInlineFragment
        }
        dropdownArrowMobile: contentfulAsset(
          title: { eq: "Mobile menu dropdown arrow" }
        ) {
          ...svgInlineFragment
        }
        dropdownArrowDesktop: contentfulAsset(
          title: { eq: "Desktop menu dropdown arrow" }
        ) {
          ...svgInlineFragment
        }

        ## target specific content not to break site by adding new header content
        contentfulHeader(contentful_id: { eq: "34DW8pcBHieXWSA9d5ttZx" }) {
          loginLinkText
          loginLinkUrl
          loginLinkStyle
          signUpLinkText
          signUpLinkUrl
          signUpLinkStyle
          columns {
            id
            heading
            menuEntries {
              ... on ContentfulMenuColumn {
                id
                heading
                menuEntries {
                  ... on ContentfulMenuColumnEntry {
                    ...contentfulMenuColumnEntry
                  }
                }
              }
              ... on ContentfulMenuColumnEntry {
                ...contentfulMenuColumnEntry
              }
            }
          }
        }

        # contentfulBanner {
        #   bannerColorType
        #   bannerContent {
        #     childMarkdownRemark {
        #       html
        #     }
        #   }
        # }

        contentfulFooter {
          id
          logo {
            ...svgInlineFragment
          }
          tagline {
            tagline
          }
          copyright {
            copyright
          }
          sections {
            id
            heading
            links {
              id
              text
              url
            }
          }
        }
      }
    `

);
if (result.errors) {
console.log(result.errors);
}

const {
logo,
hamburger,
dropdownArrowMobile,
dropdownArrowDesktop,
} = result.data;
const pages = result.data.allContentfulPage.nodes;
const banner = result.data.contentfulBanner;
const header = result.data.contentfulHeader;
const footer = result.data.contentfulFooter;

validateNumberOfIndexPages(pages);
pages.forEach((page) => {
const pagePath = page.isIndex ? '/' : `/${page.path}/`;
createPage({
path: pagePath,
component: pageTemplate,
context: {
title: page.title,
useWhiteHeaderBackground: page.useWhiteHeaderBackground,
logo,
hamburger,
dropdownArrowMobile,
dropdownArrowDesktop,
banner,
header,
footer,
triggerDownload: page.triggerDownload,
itemToDownload: page.itemToDownload,
urlToDownload: page.urlToDownload,
metaTags: page.metaTags,
sections: page.sections,

        // we define a default URL in Gatsby env vars but each page can provide an override
        typeformUrl: page.typeformUrl,
        // we support typeforms appearing both embedded directly in a Hero component
        // as well as opened as a sidebar after clicking on a button
        showTypeformInHero: page.showTypeformInHero,
      },
    });

});
};

const createContentfulBlogPages = async ({ createPage, graphql }) => {
const { data } = await graphql(
` ## reusable fragments

      fragment contentfulBlogPost on ContentfulBlogPost {
        id
        richTextContent {
          raw
        }
        subtitle
        title
        topics
        authorPosition
        authorName
        authorPicture {
          description
          fluid(maxWidth: 900, quality: 100) {
            src
            srcSet
            srcSetWebp
            sizes
          }
          title
        }
      }

      ## query
      {
        allContentfulPage {
          nodes {
            path
            title
            isIndex
            useWhiteHeaderBackground
            showIntercom
            metaTags {
              tagName
              content
            }
            showTypeformInHero
            typeformUrl
            triggerDownload
            urlToDownload
            itemToDownload {
              file {
                url
              }
            }
            sections {
              ... on Node {
                id
                __typename

                ... on ContentfulBlogPost {
                  ...contentfulBlogPost
                }
              }
            }
          }
        }
        logo: contentfulAsset(title: { eq: "Logo" }) {
          ...svgInlineFragment
        }
        dropdownArrowMobile: contentfulAsset(
          title: { eq: "Mobile menu dropdown arrow" }
        ) {
          ...svgInlineFragment
        }
        dropdownArrowDesktop: contentfulAsset(
          title: { eq: "Desktop menu dropdown arrow" }
        ) {
          ...svgInlineFragment
        }

        ## target specific content not to break site by adding new header content
        contentfulHeader(contentful_id: { eq: "34DW8pcBHieXWSA9d5ttZx" }) {
          loginLinkText
          loginLinkUrl
          loginLinkStyle
          signUpLinkText
          signUpLinkUrl
          signUpLinkStyle
          columns {
            id
            heading
            menuEntries {
              ... on ContentfulMenuColumn {
                id
                heading
                menuEntries {
                  ... on ContentfulMenuColumnEntry {
                    ...contentfulMenuColumnEntry
                  }
                }
              }
              ... on ContentfulMenuColumnEntry {
                ...contentfulMenuColumnEntry
              }
            }
          }
        }

        contentfulFooter {
          id
          logo {
            ...svgInlineFragment
          }
          tagline {
            tagline
          }
          copyright {
            copyright
          }
          sections {
            id
            heading
            links {
              id
              text
              url
            }
          }
        }
      }
    `

);
if (data.errors || data.length === 0) {
console.log(data.errors);
}

// const { logo, hamburger, dropdownArrowMobile, dropdownArrowDesktop } = data;
const pages = data.allContentfulPage.nodes;
// const banner = data.contentfulBanner;
// const header = data.contentfulHeader;
const footer = data.contentfulFooter;

validateNumberOfIndexPages(pages);
pages.forEach((page) => {
const blogPath = page.isIndex ? '/blog' : `/${page.path}/`;
createPage({
path: blogPath,
component: blogTemplate,
context: {
title: page.title,
useWhiteHeaderBackground: page.useWhiteHeaderBackground,
// logo,
// hamburger,
// dropdownArrowMobile,
// dropdownArrowDesktop,
// banner,
// header,
footer,
// triggerDownload: page.triggerDownload,
// itemToDownload: page.itemToDownload,
// urlToDownload: page.urlToDownload,
// metaTags: page.metaTags,
// sections: page.sections,
// typeformUrl: page.typeformUrl,
// showTypeformInHero: page.showTypeformInHero,
},
});
});
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
await createContentfulPages({ createPage, graphql });
await createContentfulBlogPages({ createPage, graphql });
};

https://www.takeshape.io/articles/unit-testing-your-gatsby-site-with-jest-and-react-testing-library/
