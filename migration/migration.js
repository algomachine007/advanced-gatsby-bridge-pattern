const contentful = require("contentful-management")
const fs = require("fs")

// const { GATSBY_MANAGEMENT_TOKEN, GATSBY_ACCESS_TOKEN, GATSBY_SPACE_ID } =
//   process.env

const stagingContent = JSON.parse(fs.readFileSync("./data.json", "utf8"))

let options = {
  // An object to hold options for our program
  // default options would go here
}

const client = contentful.createClient({
  accessToken: "Qz7WrxWP3mSOtBp3PwbOxdMzhLP2gaumLB-K-UxnE74",
})

// updating description of a contentType or model i.e person
// client
//   .getSpace("jeqa1wtiqf6k")
//   .then(space => space.getEnvironment("master"))
//   .then(environment => environment.getContentType("person"))
//   .then(model => {
//     model.description = "This has been updated via migration again"
//     return model.update()
//   })
//   .then(data => console.log(`${data.sys.id} updated`))
//   .catch(console.error)

// Create content type
// client
//   .getSpace("jeqa1wtiqf6k")
//   .then(space => space.getEnvironment("master"))
//   .then(environment =>
//     environment.createContentTypeWithId("test", {
//       name: "Test Blog Post",
//       fields: [
//         {
//           id: "title",
//           name: "Title",
//           required: true,
//           localized: false,
//           type: "Text",
//         },
//         {
//           id: "body",
//           name: "Body",
//           required: false,
//           localized: false,
//           type: "RichText",
//         },
//       ],
//     })
//   )
//   .then(res => console.log(`${res} created`))
//   .catch(console.error) // RichText

//Create content entry
// client
//   .getSpace("jeqa1wtiqf6k")
//   .then(space => space.getEnvironment("master"))
//   .then(env =>
//     env.createEntryWithId("test", "body", {
//       fields: {
//         title: {
//           "en-US": "Title",
//         },
//       },
//     })
//   )
//   .then(info => info)
//   .catch(console.error)

// Update entry
// client
//   .getSpace("jeqa1wtiqf6k")
//   .then(space => space.getEnvironment("master"))
//   .then(environment => environment.getEntry("body"))
//   .then(entry => {
//     entry.fields.title["en-US"] = "Amaben Richtext"
//     return entry.update()
//   })
//   .then(entry => console.log(`Entry ${entry.sys.id} updated.`))
//   .catch(console.error)

// client.getSpace("jeqa1wtiqf6k")
//Basic entries filter
// client
//   .getSpace("jeqa1wtiqf6k")
//   .then(space => space.getEnvironment("master"))
//   .then(environment => environment.getEntries())
//   .then(function (entries) {
//     // log the title for all the entries that have it
//     entries.items.forEach(function (entry) {
//       // more like filtering, hmmmm...
//       if (entry.fields) {
//         return entry.publish()
//       }
//     })
//   })

client
  .getSpace("jeqa1wtiqf6k")
  .then(space => space.getEnvironment("master"))
  .then(environment => environment.getEntry("body"))
  .then(entry => {
    if (entry) {
      console.log(entry.fields)
    }
  })
  .catch(e => console.log(e))

// 2. Filtration method 2, update

// client
//   .getSpace("jeqa1wtiqf6k")
//   .then(space => space.getEnvironment("master"))
//   .then(environment =>
//     environment.getEntries({
//       // "fields.name": "Amaben Richtext",
//       content_type: "test",
//     })
//   )
//   .then(function (entries) {
//     // log the title for all the entries that have it
//     entries.items.forEach(function (entry) {
//       // more like filtering, hmmmm...
//       if (entry.fields) {
//         const data = stagingContent
//         data.forEach(d => {
//           entry.fields.title = "nnnn"
//           entry.fields.body["en-US"] = d
//           return entry.update()
//         })
//       }
//     })
//   })
//   .catch(error => console.error(error))
