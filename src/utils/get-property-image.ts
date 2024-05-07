export const getPropertyImage = async (eDec: number, nDec: number, eInc: number, nInc: number) => {
  const size = 795; // biggest width before layout breaks into desktop columns
  const response = await fetch(`https://stadtplan.winterthur.ch/wms/Luftbild2022?LAYERS=Luftbild2022&VERSION=1.1.1&DPI=96&TRANSPARENT=TRUE&FORMAT=image%2Fpng%3B%20mode%3D8bit&SERVICE=WMS&REQUEST=GetMap&STYLES=&SRS=EPSG%3A2056&BBOX=${eDec},${nDec},${eInc},${nInc}3&WIDTH=${size}&HEIGHT=${size}`);
  const data = await response.blob();
  return data;
}