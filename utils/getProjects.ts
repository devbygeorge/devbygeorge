import sanityUrlBuilder from "./sanityUrlBuilder";

const groqQuery =
  '*[_type == "project" && !(_id in path("drafts.**"))]{...,categories[]->,}';
const url = sanityUrlBuilder(groqQuery);

async function getProjects() {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.SANITY_TOKEN}` },
    next: { revalidate: 60 },
  });
  const { result } = await response.json();
  return result;
}

export default getProjects;
