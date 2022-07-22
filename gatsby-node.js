const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

const CONTENTFUL_PAGE_TEMPLATE = path.resolve("./src/templates/contentful.js")
const DSG_PAGE_TEMPLATE = path.resolve("./src/templates/using-dsg.js")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@": path.resolve(__dirname, "src/assets", "src/components"),
        "@static": path.resolve(__dirname, "static"),
      },
    },
  })
}

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

const createDMG = async ({ createPage, graphql }) => {
  console.log(graphql)
  const slug = "/dmg"

  // you could easily create any page based on the provided slug

  createPage({
    path: slug,
    component: DSG_PAGE_TEMPLATE,
    context: {
      id: "dmg",
      locale: "en-US",
      title: "DMG",
    },
  })
}

// creates multiple templates
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  await createDMG({ createPage, graphql })
  await createContentfulPages({ createPage, graphql })
}
