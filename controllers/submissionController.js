const Submission = require('../models/Submission');

exports.createSubmission = async (req, res) => {
    const { name, socialMediaHandle } = req.body;
    const images = req.files.map(file => file.path);

    try {
        const newSubmission = new Submission({ name, socialMediaHandle, images });
        await newSubmission.save();
        res.status(201).json(newSubmission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find();
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
