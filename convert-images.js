
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './assets';
const files = fs.readdirSync(assetsDir);

files.forEach(file => {
    if (file.endsWith('.png')) {
        const inputPath = path.join(assetsDir, file);
        const name = file.replace('.png', '').toLowerCase().replace(/ /g, '-');
        const outputPath = path.join(assetsDir, `${name}.webp`);

        sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath)
            .then(() => {
                console.log(`Converted ${file} to ${name}.webp`);
                // Optional: remove original png
                // fs.unlinkSync(inputPath);
            })
            .catch(err => console.error(`Error converting ${file}:`, err));
    }
});
