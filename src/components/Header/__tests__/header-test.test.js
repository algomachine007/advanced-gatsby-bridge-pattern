import React from "react"
import { shallow, mount } from "enzyme"

import "./../../../setupTests"

import Header from "../Header"

require("jsdom-global")()
describe("Header", () => {
  let wrapper

  it("expects Header to render", () => {
    wrapper = shallow(
      <Header
        siteTitle="Hello"
        user={{
          name: "Benneth Uzochukwu",
          email: "uzochukwubenamara@gmail.com",
          username: "algomachine007",
        }}
      />
    )

    expect(wrapper.find("header").length).toBe(1)
  })
  it("expects props to be rendered", () => {
    const user = {
      name: "Benneth Uzochukwu",
      email: "",
      username: "algomachine007",
    }
    const component = mount(<Header siteTitle="Hello" user={user} />)
    const result = component.props().user
    expect(result).toEqual(user)
  })
  it("has a title of Header", () => {
    wrapper = shallow(
      <Header
        siteTitle="Hello"
        user={{
          name: "Benneth Uzochukwu",
          email: "",
          username: "algomachine007",
        }}
      />
    )
    const value = wrapper.find("h1").first().text()

    expect(value).toEqual("Hello".trim())
  })
})
