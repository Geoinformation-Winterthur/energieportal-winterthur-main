export const getHeatingSystems = async (eCoordinate: string, nCoordinate: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/HeatingSystem?x=${eCoordinate}&y=${nCoordinate}`);
  const data = await response.json();
  return data;
}