import { rmSync } from "node:fs";
import { join } from "node:path";

const showPraxisbeispiele = process.env.NEXT_PUBLIC_SHOW_PRAXISBEISPIELE === "true";

if (!showPraxisbeispiele) {
  rmSync(join(process.cwd(), "out", "praxisbeispiele"), {
    recursive: true,
    force: true,
  });
  console.log("Praxisbeispiele: disabled in static export");
} else {
  console.log("Praxisbeispiele: enabled in static export");
}
