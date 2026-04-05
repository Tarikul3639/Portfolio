const path = require('path');
const fs = require('fs');

const downloadResume = (req, res) => {
    const fileName = 'Tarikul_Islam_Resume.pdf';
    const filePath = path.join(__dirname, '../uploads', fileName);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({
            success: false,
            message: 'Resume file not found on the server'
        });
    }

    // Direct download
    return res.download(filePath, fileName, (err) => {
        if (err) {
            console.error('Download error:', err);
            res.status(500).send('Error downloading file');
        }
    });
};

module.exports = { downloadResume };