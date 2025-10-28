// Generates a 1200x630 Open Graph image prioritizing top content (keeps head visible)
// Usage: node scripts/generate-og.js

import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";
import sharp from "sharp";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function generate({ sourcePath, outputPath }) {
  // Use cover with position 'north' so the top of the portrait is preserved
  const pipeline = sharp(sourcePath)
    .resize(1200, 630, {
      fit: "cover",
      position: "north",
      withoutEnlargement: false,
    })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true });

  await ensureDir(path.dirname(outputPath));
  await pipeline.toFile(outputPath);
}

async function main() {
  const projectRoot = path.resolve(__dirname, "..");
  const source = path.join(projectRoot, "public", "preview.jpg");
  const output = path.join(projectRoot, "public", "og-image.jpg");

  await generate({ sourcePath: source, outputPath: output });
  // eslint-disable-next-line no-console
  console.log(`Generated: ${output}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
