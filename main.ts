// Entry program for the make.fun bounty "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709). Node 22, standard library only.
//
// The entry itself is the X post: the video (video.mp4, in the work dir handed to
// the poster) shows one prompt becoming the game in game.html, and POST.json names
// the post once it exists. All this program has to do is hand POST.json to the
// grader: it copies POST.json from the repository root into the output directory,
// where the house reads it and fetches the post's counts from X. Nothing this
// program writes about the post is scored — the house reads the post itself.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
