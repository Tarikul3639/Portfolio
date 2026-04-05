const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // ✅ Import cors
const userRouter = require("./routes/userRoutes.js");
require('dotenv').config();

const app = express();

// Use cors middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST'],
    credentials: true 
}));

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Routes
app.use("/api", userRouter);
app.use("/", (req, res) => {
    res.send({
        activeStatus: true,
        message: "Server is running",
        version: process.env.VERSION || "1.0.0",
        Error: false,
    })
});

module.exports = app;
