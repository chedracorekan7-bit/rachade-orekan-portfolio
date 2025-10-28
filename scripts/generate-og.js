// Generates a 1200x630 Open Graph image from an existing preview image
// Usage: node scripts/generate-og.js

import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";
import sharp from "sharp";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ensureDirectoryExists(directoryPath) {
  await fs.mkdir(directoryPath, { recursive: true });
}

async function generateOgImage({ sourcePath, outputPath }) {
  const inputBuffer = await fs.readFile(sourcePath);

  // Create 1200x630 image using cover to fill the frame without letterboxing
  const image = sharp(inputBuffer)
    .resize(1200, 630, {
      fit: "cover",
      position: "attention",
      withoutEnlargement: false,
    })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true });

  await ensureDirectoryExists(path.dirname(outputPath));
  await image.toFile(outputPath);
}

async function main() {
  const projectRoot = path.resolve(__dirname, "..");

  // Prefer root public/preview.jpg. Fallbacks included for robustness.
  const candidateSources = [
    path.join(projectRoot, "public", "preview.jpg"),
    path.join(projectRoot, "src", "assets", "hero.jpg"),
    path.join(projectRoot, "src", "assets", "img", "projet1.jpg"),
  ];

  let sourcePath = null;
  for (const candidate of candidateSources) {
    try {
      await fs.access(candidate);
      sourcePath = candidate;
      break;
    } catch {}
  }

  if (!sourcePath) {
    throw new Error(
      "No suitable source image found. Expected public/preview.jpg or a fallback in src/assets/."
    );
  }

  const outputs = [
    path.join(projectRoot, "public", "og-image.jpg"),
    path.join(projectRoot, "rachade-portfolio", "public", "og-image.jpg"),
  ];

  for (const outputPath of outputs) {
    await generateOgImage({ sourcePath, outputPath });
    // eslint-disable-next-line no-console
    console.log(`Generated: ${outputPath}`);
  }
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
