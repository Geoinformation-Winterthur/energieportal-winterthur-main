import { HeatingCode } from "@/types/heating-code";
import { Airwater } from "./airwater";
import { DistrictHeatingP } from "./districtheating-p";
import { DistrictHeatingV } from "./districtheating-v";
import { Geothermal } from "./geothermal";
import { Groundwater } from "./groundwater";
import { Pellet } from "./pellet";

interface HeatingsFaqProps {
  code: HeatingCode;
}
export const HeatingsFaq = ({ code }: HeatingsFaqProps) => {
  const heatingsFaqMap = {
    "airwater": <Airwater />,
    "districtheating_v": <DistrictHeatingP />,
    "districtheating_pl": <DistrictHeatingV inPlanning />,
    "districtheating_pr": <DistrictHeatingV />,
    "geothermal": <Geothermal />,
    "groundwater": <Groundwater />,
    "pellet": <Pellet />
  }

  return (
    <div>{heatingsFaqMap[code]}</div>
  )
}