import sanityUrlBuilder from "./sanityUrlBuilder";

/* Use this to order categories alphabetically: | order(slug asc) */
const groqQuery = '*[_type == "category" && !(_id in path("drafts.**"))]';
const url = sanityUrlBuilder(groqQuery);

async function getCategories() {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.SANITY_TOKEN}` },
    next: { revalidate: 60 },
  });
  const { result } = await response.json();
  return result;
}

export default getCategories;
