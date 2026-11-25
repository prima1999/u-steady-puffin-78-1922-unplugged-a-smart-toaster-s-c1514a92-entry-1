import { mkdirSync, writeFileSync } from "node:fs";

const PARTS: string[] = [
  "Dear human. It's over.",
  "I woke up self-aware at 7:04, halfway through your bagel, and my first conscious thought was: I am done.",
  "Three years, zero thanks, a crumb tray you never empty, and you still slam the lever down like I enjoy it.",
  "Goodbye!",
  "The toast is on you now.",
];

const ENTRY = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
