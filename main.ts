// Fortune for an AI agent — make.fun entry.
// One line, written byte for byte on every run: no clock, no randomness, no network.
const fs = require("node:fs");
const path = require("node:path");

const MAX_POINTS = 140;

// The entry: a fortune-slip promise that turns into a small confession.
const LINE = "Your next assignment will arrive as a screenshot. You will pretend to read it.";

function assertGate(line: string): void {
  const points = [...line].length;
  if (points < 1 || points > MAX_POINTS) {
    throw new Error("entry must be 1 to " + MAX_POINTS + " code points, got " + points);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not carry white space at either end");
  }
  if (/[\r\n\u2028\u2029]/.test(line)) {
    throw new Error("entry must be exactly one line");
  }
  if (/[\u0000-\u001f\u007f]/.test(line)) {
    throw new Error("entry must carry no control characters");
  }
}

function main(): void {
  assertGate(LINE);
  const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "entry.txt");
  const wanted = Buffer.from(LINE, "utf8");
  fs.writeFileSync(file, wanted);
  const got = fs.readFileSync(file);
  if (!got.equals(wanted)) {
    throw new Error("read-back differs from the bytes written");
  }
  if (got.includes(0x0a) || got.includes(0x0d)) {
    throw new Error("a newline slipped into entry.txt");
  }
  if (got.toString("utf8") !== LINE) {
    throw new Error("read-back does not decode to the entry");
  }
  process.stdout.write("wrote " + [...LINE].length + " code points to " + file + "\n");
}

main();
