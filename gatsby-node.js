const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

const createDMG = async ({ createPage, graphql }) => {}

// creates multiple templates
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  await createDMG({ createPage, graphql })
}
