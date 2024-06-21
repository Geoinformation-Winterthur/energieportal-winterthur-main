export const getCo2EmissionData = async (eCoordinate: string, nCoordinate: string) => {
  const response = await fetch(`https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometry=${eCoordinate},${nCoordinate}&geometryFormat=geojson&geometryType=esriGeometryPoint&imageDisplay=100,100,100&lang=de&layers=all:ch.bafu.klima-co2_ausstoss_gebaeude&limit=10&mapExtent=0,0,100,100&returnGeometry=true&sr=2056&tolerance=10`);
  const data = await response.json();
  return data;
}