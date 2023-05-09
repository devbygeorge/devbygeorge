import { groq } from "next-sanity";

import { sanityClient } from "sanity";

const query = groq`
  *[_type == "social"]
`;

async function getSocials() {
  const socials = await sanityClient.fetch(query);

  return socials;
}

export default getSocials;
