const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes to serve full-size banners
app.get('/bannerblue', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/images', 'blue.png'));
});

app.get('/bannergreen', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/images', 'green.png'));
});

app.get('/bannerpurple', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/images', 'purple.png'));
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
