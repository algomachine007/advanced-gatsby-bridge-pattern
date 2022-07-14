const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

const CONTENTFUL_PAGE_TEMPLATE = path.resolve("./src/templates/contentful.js")

const createContentfulPages = async ({ createPage, graphql }) => {
  const result = await graphql(`
    query {
      pages: allContentfulPage {
        nodes {
          id
          slug
          node_locale
          title
        }
      }
    }
  `)
  console.log("The query for pages is: ", result)

  if (result.data.pages.length === 0 || result.errors) {
    console.log("No pages found")
  }

  const nodes = result.data.pages.nodes || []

  nodes.forEach(({ id, node_locale, title, slug }) => {
    createPage({
      path: `/${slug}`,
      component: CONTENTFUL_PAGE_TEMPLATE,
      context: {
        id: id,
        locale: node_locale,
        title: title,
      },
    })
  })
}

const createDMG = async ({ createPage, graphql }) => {}

// creates multiple templates
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  await createDMG({ createPage, graphql })
  await createContentfulPages({ createPage, graphql })
}
