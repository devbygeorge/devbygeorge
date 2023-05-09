import { groq } from "next-sanity";

import { sanityClient } from "sanity";

/* Use this to order categories alphabetically: | order(slug asc) */
const query = groq`
  *[_type == "category"]
`;

async function getCategories() {
  const categories = await sanityClient.fetch(query);

  return categories;
}

export default getCategories;
