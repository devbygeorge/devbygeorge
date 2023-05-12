import sanityUrlBuilder from "./sanityUrlBuilder";

const groqQuery = '*[_type == "pageInfo" && !(_id in path("drafts.**"))][0]';
const url = sanityUrlBuilder(groqQuery);

async function getPageInfo() {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.SANITY_TOKEN}` },
    next: { revalidate: 60 },
  });
  const { result } = await response.json();
  return result;
}

export default getPageInfo;
