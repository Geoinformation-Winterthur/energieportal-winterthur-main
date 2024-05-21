import { HeatingCode } from "./heating-code";

export type Heating = {
  code: HeatingCode;
  isRecommendation: boolean;
  status: string;
  isDistrictHeating?: boolean;
}