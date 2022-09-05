const contentful = require("contentful-management")
const fs = require("fs")

const { GATSBY_MANAGEMENT_TOKEN, GATSBY_ACCESS_TOKEN, GATSBY_SPACE_ID } =
  process.env

const client = contentful.createClient({
  accessToken: "Qz7WrxWP3mSOtBp3PwbOxdMzhLP2gaumLB-K-UxnE74",
})
console.log(GATSBY_ACCESS_TOKEN)
client
  .getSpace("jeqa1wtiqf6k")
  .then(space => space.getEnvironment("master"))
  .then(environment => environment.getContentType("person"))
  .then(model => {
    model.description = "This has been updated via migration again"
    return model.update()
  })
  .then(data => console.log(`${data.sys.id} updated`))
  .catch(console.error)
