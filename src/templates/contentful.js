// here, we query for all the data in the app

import React from "react"

const ContentfulPageTemplate = ({ pageContext }) => {
  console.log("context", pageContext)
  return (
    <div>
      Layout Footer
      <h1>{pageContext.title}</h1>
    </div>
  )
}

export default ContentfulPageTemplate
