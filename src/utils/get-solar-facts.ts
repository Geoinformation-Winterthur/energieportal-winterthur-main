import { SolarFacts } from "@/types/solar-facts";

export const getSolarFacts = async (x: number, y: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/SolarCadastre?x=${x}&y=${y}`);
  // The endpoint will return an error 400 (bad request) if no solar roof area is intersected by the given coordinate
  if (response.status === 400) {
    return null;
  }
  const data: SolarFacts = await response.json();
  return data;
};
