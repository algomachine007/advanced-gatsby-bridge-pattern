import fs from "fs"
import contentful from "contentful-management"
import { faker } from "@faker-js/faker"
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

async function createEntryWithAsset() {
  try {
    const space = await client.getSpace("jeqa1wtiqf6k")
    const environment = await space.getEnvironment("master")

    /**
     * Entry creation and publish
     */
    // let entry = await environment.createEntry("blogPostTest", {
    //   fields: {
    //     id: {
    //       "en-US": faker.datatype.number(4).toString(),
    //     },
    //     title: {
    //       "en-US": "Title",
    //     },
    //     images: {
    //       "en-US": [],
    //     },
    //     id: "body",
    //     name: "Body",
    //     required: false,
    //     localized: false,
    //     type: "RichText",
    //   },
    // })

    let entry = await environment.createContentTypeWithId("blogPostTest", {
      name: "Blog Post Test",
      description: "A test blog post",
      fields: [
        {
          id: "title",
          name: "Title",
          required: true,
          localized: false,
          type: "Text",
        },
        {
          id: "body",
          name: "Body",
          required: false,
          localized: false,
          type: "RichText",
        },
      ],
    })
    // reassign `entry` to have the latest version number
    entry = await entry.publish()

    /**
     * Asset creation and publish
     */
    // let asset = await environment.createAssetWithId(
    //   faker.datatype.number(4).toString(),
    //   {
    //     fields: {
    //       title: {
    //         "en-US": "Title",
    //       },
    //       file: {
    //         "en-US": {
    //           contentType: "image/jpeg",
    //           fileName: "amaben" + ".jpeg",
    //           upload: "uploadHref",
    //         },
    //       },
    //     },
    //   }
    // )
    // // reassign `asset` to have the latest version number
    // asset = await asset.processForAllLocales()
    // asset = await asset.publish()

    // /**
    //  * Update entry with new asset
    //  */
    // entry.fields["images"]["en-US"] = {
    //   sys: {
    //     id: asset.sys.id,
    //     linkType: "Asset",
    //     type: "Link",
    //   },
    // }
    // entry = await entry.update()
    // entry = await entry.publish()
  } catch (error) {
    throw new Error(error.message)
  }
}

createEntryWithAsset()
