import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";
import sharp from "sharp";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const projectRoot = path.resolve(__dirname, "..");
  const source = path.join(projectRoot, "public", "preview.jpg");
  
  // Différentes tailles pour une compatibilité maximale
  const sizes = [
    { name: "favicon.png", size: 192 },
    { name: "apple-touch-icon.png", size: 180 }
  ];

  for (const { name, size } of sizes) {
    const output = path.join(projectRoot, "public", name);
    await sharp(source)
      .resize(size, size, {
        fit: "cover",
        position: "top" // Prioriser le haut de l'image (le visage généralement)
      })
      .png({ quality: 100 })
      .toFile(output);
    console.log(`Généré: ${output}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
