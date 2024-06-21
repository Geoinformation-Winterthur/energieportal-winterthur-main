export const getEgid = async (address: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/Egid?address=${address}`);
  const data = await response.json();
  return data;
}