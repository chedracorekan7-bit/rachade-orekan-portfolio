import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const projectRoot = path.resolve(__dirname, "..");
  const source = path.join(projectRoot, "src", "assets", "hero.jpg");
  
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
  
  // Générer le favicon.ico à partir du favicon.png (192px)
  try {
    const pngPath = path.join(projectRoot, "public", "favicon.png");
    const icoPath = path.join(projectRoot, "public", "favicon.ico");
    const buf = await pngToIco(pngPath);
    await fs.writeFile(icoPath, buf);
    console.log(`Généré: ${icoPath}`);
  } catch (err) {
    console.error("Erreur lors de la génération de favicon.ico:", err);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
