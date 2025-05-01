const path = require('path');
const fs = require('fs');

const downloadCV = (req, res) => {
    const fileName = 'TarikulIslam_CV_Resume_2025.pdf';
    const filePath = path.join(__dirname, '../uploads', fileName);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return res.status(400).json({ message: 'CV file not found' });
    }

    res.download(filePath, fileName, (err) => {
        if (err) {
            console.error('Error downloading CV:', err);
            return res.status(500).json({ message: 'Error downloading CV' });
        }
    });
};

module.exports = { downloadCV }; 