// Consider a scenario where we want to reuse the frontmatter portion of the following
// query, shown in bold, in other queries:
;`1.  query {
 site {
 siteMetadata {
 title
 }
 }
 allMarkdownRemark {
 nodes {
 excerpt
 fields {
 slug
 }
 frontmatter {
 date(formatString: "MMMM DD, YYYY")
 title
 description
 }
 }
 }
}``2. 
  fragment MarkdownFrontmatter on MarkdownRemark {
 frontmatter { 
 date(formatString: "MMMM DD, YYYY")
 title
 description}}
  ``3. 
query {
 site {
 siteMetadata {
 title
 }
 }
 allMarkdownRemark {
 nodes {
 excerpt
 fields {
 slug
 }
 ... on MarkdownRemark {
 frontmatter { 
 date(formatString: "MMMM DD, YYYY")
 title
 description
 }
 }
 }
 }
}
  `
