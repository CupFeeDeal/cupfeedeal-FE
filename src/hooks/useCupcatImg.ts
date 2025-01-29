import { Cupcat1 } from "@assets/icons";
import { Cupcat2 } from "@assets/icons";
import { Cupcat3 } from "@assets/icons";
import { Cupcat4 } from "@assets/icons";
import { Cupcat5 } from "@assets/icons";
import { Cupcat6 } from "@assets/icons";
import { Cupcat7 } from "@assets/icons";
import { Cupcat8 } from "@assets/icons";
import { Cupcat9 } from "@assets/icons";
import { Cupcat10 } from "@assets/icons";
import { Cupcat11 } from "@assets/icons";
import { Cupcat12 } from "@assets/icons";
import { Cupcat13 } from "@assets/icons";
import { Cupcat14 } from "@assets/icons";
import { Cupcat15 } from "@assets/icons";
import { Cupcat16 } from "@assets/icons";
import { Cupcat17 } from "@assets/icons";
import { Cupcat18 } from "@assets/icons";
import { SVGProps } from "react";

const cupcatMap: Record<
  number,
  React.ComponentType<SVGProps<SVGSVGElement>>
> = {
  1: Cupcat1,
  2: Cupcat2,
  3: Cupcat3,
  4: Cupcat4,
  5: Cupcat5,
  6: Cupcat6,
  7: Cupcat7,
  8: Cupcat8,
  9: Cupcat9,
  10: Cupcat10,
  11: Cupcat11,
  12: Cupcat12,
  13: Cupcat13,
  14: Cupcat14,
  15: Cupcat15,
  16: Cupcat16,
  17: Cupcat17,
  18: Cupcat18,
};

export function useCupcatImg(id: number) {
  const DefaultCupcat = Cupcat1;
  return cupcatMap[id] || DefaultCupcat;
}
