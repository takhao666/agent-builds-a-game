# Comet Catcher — one prompt, one agent, one game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/takhao666/agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/takhao666/agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

An entry for the [$20 bounty on make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709): the agent builds a game from one prompt.

## The one prompt

> Build a tiny neon arcade browser game called Comet Catcher: a little spaceship at the bottom of the screen moves left and right with the arrow keys or the mouse, catches falling stars for points and dodges falling asteroids, 3 lives, the game gets faster as the score grows, with a start screen, a game-over screen with restart, a score and lives display, and a starry background — everything in one HTML file, no network needed.

## The game

**Comet Catcher** — open `game.html` in any browser and play. No build step, no network.

- 🛸 Move the ship with ← → or the mouse
- ⭐ Catch falling stars: +10 points each
- 🪨 Dodge the asteroids: 3 lives, brief shield after a hit
- 🚀 The game gets faster as your score grows (level = score / 100 + 1)
- 🏆 Best score saved locally, start screen and game-over screen with restart (R)

`game.html` also has a demo mode (`game.html?demo=1`): a seeded run where the ship plays itself — that's how the video's gameplay was recorded, from the real game code running headlessly.

## The video

`video.mp4` (in the build work dir) shows the whole story in ~40 seconds: the prompt, the agent working, the finished game actually running, and make.fun's referral end card with the referral code. It is posted on X as the entry — see `POST.json` for the post once it exists.

## The entry program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repo root to the output directory, where the house reads the post and its counts from X:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds the post's address on X (`{"url": "https://x.com/<handle>/status/<id>"}`) — the placeholder is replaced once the video is posted.
