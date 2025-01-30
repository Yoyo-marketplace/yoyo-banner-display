const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Function to serve individual banner pages
const serveBannerPage = (bannerFile, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>运输无忧</title>
            <link rel="stylesheet" href="/css/styles.css">
        </head>
        <body>
            <div class="container">
                <img src="/images/${bannerFile}" class="banner" >
            </div>
        </body>
        </html>
    `);
};

// Routes for individual bannerss
app.get('/bannerblue', (req, res) => serveBannerPage('blue.png', res));
app.get('/bannergreen', (req, res) => serveBannerPage('green.png', res));
app.get('/bannerpurple', (req, res) => serveBannerPage('purple.png', res));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
