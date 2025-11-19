const express = require('express');
const router = express.Router();
const Journal = require('../models/journalModel');

// Add a journal entry
router.post('/add', async (req, res) => {
    try {
        const { text, date } = req.body;

        if (!text || !date) {
            return res.status(400).json({ success: false, message: "Text and date are required" });
        }

        const newEntry = await Journal.create({ text, date });

        res.json({
            success: true,
            message: "Entry saved",
            data: newEntry
        });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get all entries
router.get('/all', async (req, res) => {
    try {
        const entries = await Journal.find().sort({ createdAt: -1 });
        res.json({ success: true, data: entries });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete entry
router.delete('/delete/:id', async (req, res) => {
    try {
        const deleted = await Journal.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ success: false, message: "Entry not found" });
        }

        res.json({ success: true, message: "Entry deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
