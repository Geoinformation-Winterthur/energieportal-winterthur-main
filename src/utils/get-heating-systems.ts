export const getHeatingSystems = async (eCoordinate: string, nCoordinate: string) => {
  const response = await fetch(`https://stadtplantest.winterthur.ch/energieportal-service/HeatingSystem?x=${eCoordinate}&y=${nCoordinate}`);
  const data = await response.json();
  return data;
}