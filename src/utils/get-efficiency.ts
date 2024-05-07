export const getEfficiency = async (searchParams: string) => {
  const response = await fetch(`https://stadtplantest.winterthur.ch/energieportal-service/Efficiency?${searchParams}`);
  const data = await response.json();
  return data;
}