import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2025-07-25",
  dataset: "production",
  projectId: "hrr5myse",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => {
  return builder.image(source);
};
