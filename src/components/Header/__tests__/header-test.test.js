import React from "react"
import { shallow, mount } from "enzyme"

import "./../../../setupTests"

import Header from "../Header"

describe("Header", () => {
  let wrapper

  it("expects Header to render", () => {
    wrapper = shallow(
      <Header siteTitle="Display Active Users Account Details" />
    )
    const header = <h1>Display Active Users Account Details</h1>
    expect(wrapper.contains(header)).toEqual(true)
  })
})
