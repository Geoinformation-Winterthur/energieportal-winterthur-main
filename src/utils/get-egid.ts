export const getEgid = async (address: string) => {
  const response = await fetch(`https://stadtplantest.winterthur.ch/energieportal-service/Egid?address=${address}`);
  const data = await response.json();
  return data;
}