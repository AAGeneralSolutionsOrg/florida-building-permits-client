/** Minimal client for the Florida Building and Roof Permits API. */

const HOST = "florida-building-and-roof-permits.p.rapidapi.com";
const URL = `https://${HOST}/v1/permits`;

export async function permits({
  county = "all",
  type = "roof",
  limit = 25,
  offset = 0,
} = {}) {
  const query = new URLSearchParams({
    state: "FL",
    county,
    type,
    limit: String(limit),
    offset: String(offset),
  });
  const response = await fetch(`${URL}?${query}`, {
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": HOST,
    },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) {
    throw new Error(`RapidAPI request failed: ${response.status}`);
  }
  return response.json();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(await permits({ county: "orange", type: "roof", limit: 2 }));
}
