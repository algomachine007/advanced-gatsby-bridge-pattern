import { data, houseForSale } from "./data"

const utils = require("./__mocks__/utils")

// test("the title is correct", () => {
//   expect(data).toMatchSnapshot()
//   expect(data).toHaveLength(5)
//   expect(data.map(elem => elem.username)).toEqual([
//     "Leanne",
//     "Antonette",
//     "Karianne",
//     "Samantha",
//     "Kamren",
//   ])
// })

for (let i = 0; i < data.length; i += 1) {
  test(`${data[i]} should have properties (id, username)`, () => {
    expect(data[i]).toHaveProperty("id")
    expect(data[i]).toHaveProperty("username")
    expect(data[i]).not.toHaveProperty("job")
  })
}

// Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.

test("the function should sum 2 values", () => {
  jest.spyOn(utils, "sumValue")
  utils.sumValue(1, 2)
  expect(utils.sumValue).toHaveBeenCalledTimes(1)
  expect(utils.sumValue).toHaveBeenCalledWith(1, 2)
})

// https://jestjs.io/docs/mock-functions
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}
test("the function should sum 2 values", () => {
  const mockCallback = jest.fn(x => 42 + x)
  forEach([0, 1], mockCallback)

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2)

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42)
})

const logNames = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    return cb(arr[i].name)
  }
}

test("", () => {
  const mockCallback = jest.fn(logNames)
  forEach(
    [
      {
        name: "Benneth Uzochukwu",
      },
      {
        name: "Damilola",
      },
    ],
    mockCallback
  )
  expect(mockCallback.mock.calls.length).toBe(2)
  expect(mockCallback.mock.calls[0][0].name).toBe("Benneth Uzochukwu")
  expect(mockCallback.mock.calls[1][0].name).toBe("Damilola")
})

test("mock implementation of a basic function", () => {
  const mock = jest.fn(() => "I am a mock function")

  expect(mock("Calling the mock function")).toBe("I am a mock function")
  expect(mock).toHaveBeenCalledWith("Calling the mock function")

  // get the mock function name
  mock.getMockName = jest.fn(() => "I am a mock function")
})

test("mock return value once", () => {
  const mock = jest.fn()
  // when someone calls the mock function the first time, give us this output
  mock.mockReturnValueOnce("Hello").mockReturnValueOnce("there!")
  mock()
  mock()

  expect(mock).toHaveBeenCalledTimes(2)

  mock("Hello", "there")
  expect(mock).toHaveBeenCalledWith("Hello", "there")

  mock("Steve")

  expect(mock).toHaveBeenLastCalledWith("Steve")
})

// mocking production server functions
test("mock implementation of a basic function", () => {
  const mock = jest.fn().mockImplementation(() => "UK")
  expect(mock("Location")).toBe("UK")
  expect(mock).toHaveBeenCalledWith("Location")
})

//spy: a function that is a mock function but also tracks the calls to the function
test("spying using original implementation", () => {
  const pizza = {
    name: n => `Pizza name: ${n}`,
  }
  const spy = jest.spyOn(pizza, "name")
  expect(pizza.name("Cheese")).toBe("Pizza name: Cheese")
  expect(spy).toHaveBeenCalledWith("Cheese")
})

test("spying using mockImplementation", () => {
  const pizza = {
    name: n => `Pizza name: ${n}`,
  }
  const spy = jest.spyOn(pizza, "name")
  spy.mockImplementation(() => "Crazy Pizza")
  expect(pizza.name("Cheese")).toBe("Crazy Pizza")

  // resetting the function to the original implementation
  spy.mockRestore()
  expect(pizza.name("Cheese")).toBe("Pizza name: Cheese")
})

describe("another test suite", () => {
  const username1 = data[0]
  const username2 = data[1]
  const username3 = data[2]

  const user = jest.fn(user => user.username)

  user(username1)
  user(username2)
  user(username3)

  expect(user).toHaveBeenCalledTimes(3)
  expect(user).toHaveBeenCalledWith(username1)
  expect(user).toHaveLastReturnedWith("Samantha")
})

// data matching
describe("data matching", () => {
  const user4 = {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  }
  expect(data[3]).toEqual(user4)
  expect(data[3]).toMatchObject(user4)
})

// resolving promises
test("resolving promises", async () => {
  const user = {
    getFullName: jest.fn(() => Promise.resolve("Steve Jobs")),
  }
  await expect(user.getFullName()).resolves.toBe("Steve Jobs")
})

// rejection of promises
test("resolving promises", async () => {
  const user = {
    getFullName: jest.fn(() =>
      Promise.reject(new Error("Something went wrong"))
    ),
  }
  await expect(user.getFullName()).rejects.toThrow("Something went wrong")
})
