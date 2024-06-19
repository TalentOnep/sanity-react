import { createClient } from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
   projectId: "tab779cp", 
   dataset: "production", 
   apiVersion: "2024-03-11",
   // Set to `true` for production environments
   useCdn: false, 
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}

export default client