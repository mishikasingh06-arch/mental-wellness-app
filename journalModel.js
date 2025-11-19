const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Journal", JournalSchema);
