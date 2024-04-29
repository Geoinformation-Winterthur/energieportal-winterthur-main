import { getEgid } from "./get-egid";

export const getPropertyFacts = async (address: string) => {
  const response = await fetch(`https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=${await getEgid(address || "")}&searchField=egid&returnGeometry=false&contains=false`);
  const data = await response.json();
  return data;
}