import React from "react"

export const getContentfulElementParagraph = data =>
  data?.internal?.content && <p>{data.internal.content} </p>
