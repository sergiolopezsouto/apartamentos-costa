const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Flag URLs
const flags = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1280px-Bandera_de_Espa%C3%B1a.svg.png',
    filename: 'es-flag.png'
  },
  {
    url: 'https://flagcdn.com/w320/gb.png',
    filename: 'uk-flag.png'
  }
];

// Download function
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const filePath = path.join(imagesDir, filename);
      const fileStream = fs.createWriteStream(filePath);

      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filePath, () => reject(err));
      });
    }).on('error', reject);
  });
}

// Download all flags
async function downloadAllFlags() {
  console.log('Downloading flag images...');
  for (const flag of flags) {
    await downloadImage(flag.url, flag.filename);
  }
  console.log('All flag images downloaded successfully!');
}

downloadAllFlags(); 