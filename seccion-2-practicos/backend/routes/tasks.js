const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.post('/', upload.single('adjunto'), async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;

        const newTask = new Task({
            titulo,
            descripcion,
            adjunto: req.file ? req.file.filename : null
        });

        const savedTask = await newTask.save();

        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;