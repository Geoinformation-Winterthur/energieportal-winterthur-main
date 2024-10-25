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
    districtheating_p: <DistrictHeatingP area={area} />,
    districtheating_v: <DistrictHeatingV area={area} />,
    geothermal: <Geothermal />,
    groundwater: <Groundwater />,
    pellet: <Pellet />,
  };

  return <div>{heatingsFaqMap[code]}</div>;
};
