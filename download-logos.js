const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Logo URLs
const logos = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png',
    filename: 'airbnb-icon.png'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png',
    filename: 'whatsapp-icon.png'
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

// Download all logos
async function downloadAllLogos() {
  console.log('Downloading logos...');
  for (const logo of logos) {
    await downloadImage(logo.url, logo.filename);
  }
  console.log('All logos downloaded successfully!');
}

downloadAllLogos(); 