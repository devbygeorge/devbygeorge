import sanityUrlBuilder from "./sanityUrlBuilder";

const query = '*[_type == "social"]';
const url = sanityUrlBuilder(query);

async function getSocials() {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.SANITY_TOKEN}` },
    next: { revalidate: 60 },
  });
  const { result } = await response.json();
  return result;
}

export default getSocials;
