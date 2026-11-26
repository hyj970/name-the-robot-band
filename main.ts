import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Our robot band is called The Buffering — we play one note, load the next, and our biggest hit is the sound of a spinning wheel.";

function formatEntry(): string {
  return ENTRY;
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), formatEntry() + "\n", "utf8");
