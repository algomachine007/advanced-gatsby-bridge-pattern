import React from "react"
import { shallow, mount } from "enzyme"

import Header from "../Header"

describe("Header", () => {
  let wrapper

  it("wraps content in a div with .notificationsFrame class", () => {
    wrapper = shallow(<Header />)
    expect(wrapper.find(".notificationsFrame").length).toEqual(1)
  })
})
