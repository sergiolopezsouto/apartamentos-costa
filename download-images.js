const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Hero images
const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop',
    filename: 'salou-beach.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop',
    filename: 'portaventura.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop',
    filename: 'mediterranean.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519046904884-47203ff774ca?q=80&w=1920&auto=format&fit=crop',
    filename: 'salou-town.jpg'
  }
];

// Apartment images
const apartmentImages = [
  {
    url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1920&auto=format&fit=crop',
    filename: 'apartment1-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1920&auto=format&fit=crop',
    filename: 'apartment1-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop',
    filename: 'apartment2-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1920&auto=format&fit=crop',
    filename: 'apartment2-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560449017-39d35e9c8e91?q=80&w=1920&auto=format&fit=crop',
    filename: 'apartment3-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560449017-39d35e9c8e91?q=80&w=1920&auto=format&fit=crop',
    filename: 'apartment3-2.jpg'
  }
];

// Download function
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Downloading hero images...');
  for (const image of heroImages) {
    await downloadImage(image.url, image.filename);
  }
  
  console.log('Downloading apartment images...');
  for (const image of apartmentImages) {
    await downloadImage(image.url, image.filename);
  }
  
  console.log('All images downloaded successfully!');
}

downloadAllImages().catch(console.error); 