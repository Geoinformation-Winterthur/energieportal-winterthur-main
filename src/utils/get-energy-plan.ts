export const getEnergyPlan = async (eCoordinate: string, nCoordinate: string) => {
  const response = await fetch(`https://stadtplantest.winterthur.ch/energieportal-service/EnergyPlan?x=${eCoordinate}&y=${nCoordinate}`);
  const data = await response.text();
  return data;
}