import { P1 } from "./heating-area/p1";
import { P12 } from "./heating-area/p12";
import { P13 } from "./heating-area/p13";
import { P14 } from "./heating-area/p14";
import { P15 } from "./heating-area/p15";
import { P2 } from "./heating-area/p2";
import { P7 } from "./heating-area/p7";
import { P9 } from "./heating-area/p9";
import { V10 } from "./heating-area/v10";
import { V11 } from "./heating-area/v11";
import { V17 } from "./heating-area/v17";
import { V18 } from "./heating-area/v18";
import { V19 } from "./heating-area/v19";
import { V3 } from "./heating-area/v3";
import { V4 } from "./heating-area/v4";
import { V5 } from "./heating-area/v5";
import { V8 } from "./heating-area/v8";

interface HeatingStatusProps {
  area: string;
}
export const HeatingStatus = ({ area }: HeatingStatusProps) => {
  const heatingStatusMap = {
    P1: <P1 />,
    P2: <P2 />,
    P7: <P7 />,
    P9: <P9 />,
    P12: <P12 />,
    P13: <P13 />,
    P14: <P14 />,
    P15: <P15 />,
    V3: <V3 />,
    V4: <V4 />,
    V5: <V5 />,
    V8: <V8 />,
    V10: <V10 />,
    V11: <V11 />,
    V17: <V17 />,
    V18: <V18 />,
    V19: <V19 />,
  };

  return <>{heatingStatusMap[area as keyof typeof heatingStatusMap]}</>;
};
