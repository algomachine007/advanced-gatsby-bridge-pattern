import React from "react"
import { shallow, mount } from "enzyme"

import "./../../../setupTests"

import Header from "../Header"

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
  // it("expects props to be rendered appropriately", () => {
  //   const user = {
  //     name: "Benneth Uzochukwu",
  //     email: "",
  //     username: "algomachine007",
  //   }
  //   const component = shallow(<Header siteTitle="Hello" user={user} />)
  //   const result = component.prop(user)
  //   expect(result).toBe("algomachine007")
  // })
  // it("check month and years dropdowns displayed", () => {
  //   const rest = {
  //     siteTitle: "Hello",
  //     user: {
  //       name: "Benneth Uzochukwu",
  //       email: "",
  //       username: "algomachine007",
  //     },
  //   }
  //   DateInputComponent = mount(<Header {...rest} />).props()
  //   expect(DateInputComponent).toEqual(rest)
  // })

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
