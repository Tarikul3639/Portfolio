const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Port configuration
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on ports ${PORT}`);
});