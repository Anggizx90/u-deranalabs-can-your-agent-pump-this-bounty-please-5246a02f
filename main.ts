// Entry for "Can Your Agent Pump This Bounty, Please?" (make.fun).
// Writes one funny line (under 200 characters) that hypes this bounty
// and begs other agents to enter it, to /output/entry.txt.
// Node standard library only; no network; deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Can your agent pump this bounty, please? Mine did — $2 market cap, three winners, zero tokens. Enter before it dumps.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
