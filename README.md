# Fortune Cookie for an AI Agent

One funny fortune cookie line for an AI agent: main.ts writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`), byte for byte on every run.

[![make.fun · u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/djkaz97-cmd/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/leaderboard)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/djkaz97-cmd/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

## Run it

```
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22.18 or later runs main.ts as it is; there is no package.json and nothing to install. The program is deterministic: no clock, no randomness, no network. It asserts the 1 to 140 code point gate, creates the output directory, writes the line, reads it back, and fails loudly if a byte differs or a newline slipped in.
