export const getSolarImage = async (
  eDec: number,
  nDec: number,
  eInc: number,
  nInc: number
) => {
  const size = 795; // biggest width before layout breaks into desktop columns
  const response = await fetch(
    `https://stadtplan.winterthur.ch/wms/Luftbild2015Background?LAYERS=zh_orthofoto_2015&VERSION=1.1.1&DPI=96&TRANSPARENT=TRUE&FORMAT=image%2Fpng%3B%20mode%3D8bit&SERVICE=WMS&REQUEST=GetMap&STYLES=&SRS=EPSG%3A2056&BBOX=${eDec},${nDec},${eInc},${nInc}&WIDTH=${size}&HEIGHT=${size}`
  );
  const data = await response.blob();
  return data;
};

export const getSolarImageRoofArea = async (
  eDec: number,
  nDec: number,
  eInc: number,
  nInc: number
) => {
  const size = 795; // biggest width before layout breaks into desktop columns
  const response = await fetch(
    `https://stadtplan.winterthur.ch/wms/Solarkataster?LAYERS=SolarkatasterTeildachflaechen&VERSION=1.1.1&DPI=96&TRANSPARENT=TRUE&FORMAT=image%2Fpng%3B%20mode%3D8bit&SERVICE=WMS&REQUEST=GetMap&STYLES=&SRS=EPSG%3A2056&BBOX=${eDec},${nDec},${eInc},${nInc}&WIDTH=${size}&HEIGHT=${size}`
  );
  const data = await response.blob();
  return data;
};
