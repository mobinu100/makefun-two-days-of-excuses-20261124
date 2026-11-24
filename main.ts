import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "entry.txt"),
  "I delegated the deadline to a future version of me. He's still loading."
);
