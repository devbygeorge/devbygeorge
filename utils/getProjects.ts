import { groq } from "next-sanity";

import { sanityClient } from "sanity";

const query = groq`
  *[_type == "project"]{
    ...,
    categories[]->,
  }
`;

async function getProjects() {
  const projects = await sanityClient.fetch(query);

  return projects;
}

export default getProjects;
