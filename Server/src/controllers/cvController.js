const path = require('path');
const fs = require('fs');

const downloadCV = (req, res) => {
    const fileName = 'TarikulIslam_CV_Resume_2025.pdf';
    const filePath = path.join(__dirname, '../uploads', fileName);

    // 1. Check if the file exists on the server
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ 
            success: false, 
            message: 'CV file not found on the server' 
        });
    }

    try {
        // 2. Read the file into a Buffer
        const fileBuffer = fs.readFileSync(filePath);
        
        // 3. Convert Buffer to Base64 string to send inside JSON
        const base64File = fileBuffer.toString('base64');

        // 4. Send the success response with file data
        return res.status(200).json({
            success: true,
            message: 'CV download initiated successfully',
            fileName: fileName,
            fileData: base64File 
        });
    } catch (err) {
        console.error('Server Error:', err);
        return res.status(500).json({ 
            success: false, 
            message: 'An error occurred while processing the file' 
        });
    }
};

module.exports = { downloadCV };