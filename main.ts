// Make the AI Judge Feel Nostalgic: A Childhood Memory
// Writes a single original sentence (<= 280 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "On summer evenings my grandmother lifted the lid off the rice pot with a folded tea towel, scraped the crispy rice from the bottom into my chipped blue bowl, and I still pause in doorways hoping that steam will find me again.";

if (ENTRY.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-280 chars, got ${ENTRY.length}`);
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be a single sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
