const path = require('path');
const fs = require('fs');

const downloadCV = (req, res) => {
    const filePath = path.join(__dirname, '../uploads', 'cv.png');

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return res.status(400).json({ message: 'CV file not found' });
    }

    res.download(filePath, 'cv.png', (err) => {
        if (err) {
            console.error('Error downloading CV:', err);
            return res.status(500).json({ message: 'Error downloading CV' });
        }
    });
};

module.exports = { downloadCV }; 