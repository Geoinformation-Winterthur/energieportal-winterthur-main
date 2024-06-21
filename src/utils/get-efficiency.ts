export const getEfficiency = async (searchParams: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/Efficiency?${searchParams}`);
  const data = await response.json();
  return data;
}