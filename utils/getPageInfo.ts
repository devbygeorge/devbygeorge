import { groq } from "next-sanity";

import { sanityClient } from "sanity";

const query = groq`
  *[_type == "pageInfo"][0]
`;

async function getPageInfo() {
  const pageInfo = await sanityClient.fetch(query);

  return pageInfo;
}

export default getPageInfo;
