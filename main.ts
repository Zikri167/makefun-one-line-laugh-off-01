import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh-Off entry: a single self-contained joke.
// The punch lands on the last word — the 3 a.m. chirp, reframed
// as the narrator's most reliable relationship.
const JOKE =
  "My smoke detector only chirps at 3 a.m. — it's the most consistent relationship I've ever had.";

// Guard: the gate requires 1-200 characters, a single line, not blank.
// Fail loudly instead of writing an entry the gate would reject.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n") || JOKE.trim() === "") {
  throw new Error("JOKE violates the entry gate (1-200 chars, single line)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
