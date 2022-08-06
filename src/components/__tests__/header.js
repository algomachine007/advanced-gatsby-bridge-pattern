import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const siteTitle = `Hello World`
    const tree = renderer.create(<Header siteTitle={siteTitle} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

// import * as React from "react"
// import renderer from "react-test-renderer"

// import Header from "../header"

// describe(`Header`, () => {
//   it(`renders siteTitle`, () => {
//     const siteTitle = `Hello World`
//     const { getByText } = render(<Header siteTitle={siteTitle} />)

//     const title = getByText(siteTitle)

//     expect(title).toBeInTheDocument()
//   })
// })
