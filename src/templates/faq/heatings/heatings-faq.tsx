import { HeatingCode } from "@/types/heating-code";
import { Airwater } from "./airwater";
import { DistrictHeatingP } from "./districtheating-p";
import { DistrictHeatingV } from "./districtheating-v";
import { Geothermal } from "./geothermal";
import { Groundwater } from "./groundwater";
import { Pellet } from "./pellet";

interface HeatingsFaqProps {
  code: HeatingCode;
  area: string;
}
export const HeatingsFaq = ({ code, area }: HeatingsFaqProps) => {
  const heatingsFaqMap = {
    airwater: <Airwater />,
    districtheating_v: <DistrictHeatingP area={area} />,
    districtheating_p1: <DistrictHeatingP area={area} />,
    districtheating_pl: <DistrictHeatingV area={area} />,
    districtheating_pr: <DistrictHeatingV area={area} />,
    geothermal: <Geothermal />,
    groundwater: <Groundwater />,
    pellet: <Pellet />,
  };

  return <div>{heatingsFaqMap[code]}</div>;
};
