const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    socialMediaHandle: { type: String, required: true },
    images: [{ type: String, required: true }],
});

module.exports = mongoose.model('Submission', SubmissionSchema);
