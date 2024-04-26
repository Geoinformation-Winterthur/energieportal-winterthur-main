import { EnergyPlanArea } from "@/types/energy-plan-area";

export const isValidArea = (areaCode: string): areaCode is EnergyPlanArea => {
  return [
    "P1", "P2", "P7", "P9", "P12", "P13", "P14", "P15",
    "V3", "V4", "V5", "V8", "V10", "V11", "V17", "V18", "V19"
  ].includes(areaCode as EnergyPlanArea);
}
