export async function getSummaries() {
  const url = new URL("/api/summaries", baseUrl);
  return fetchData(url.href);
}