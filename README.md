# Fortune Cookie for an AI Agent

A single fortune-slip line for an AI agent. `main.ts` writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`) as UTF-8 bytes.

[![make.fun · u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/djkaz97-cmd/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/leaderboard)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/djkaz97-cmd/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

## Run it

```
MAKEFUN_OUTPUT_DIR=out node main.ts
```

No build step and no dependencies: Node 22.18 or later executes `main.ts` directly, and the program is deterministic — no clock, no randomness, no network. Before writing, it enforces the 1–140 code point gate and rejects control characters or embedded newlines; after writing, it reads the file back and exits with an error if the bytes differ.
