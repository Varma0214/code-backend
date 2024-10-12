// routes/submissions.js

const express = require('express');
const multer = require('multer');
const Submission = require('../models/Submission');
const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Temporary storage

// POST endpoint to submit data
router.post('/', upload.array('images', 10), async (req, res) => {
    const { name, socialHandle } = req.body;
    const images = req.files.map(file => file.path); // Assuming images are stored temporarily

    try {
        const newSubmission = new Submission({ name, socialHandle, images });
        await newSubmission.save();
        res.status(201).json(newSubmission);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET endpoint to fetch all submissions
router.get('/', async (req, res) => {
    try {
        const submissions = await Submission.find();
        res.json(submissions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 
