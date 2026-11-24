// Dad Joke Showdown — entrypoint.
// Writes one dad joke (at most 200 characters) to /output/entry.txt
// for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "My sourdough starter died this morning. Three years I fed that thing, and in the end it just couldn't rise to the occasion.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
