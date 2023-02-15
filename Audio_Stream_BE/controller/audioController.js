const express = require('express');
const router = express.Router();
const multer = require('multer');
const Audio = require('../models/audioModel');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Set up multer upload middleware
const upload = multer({ storage: storage });

// Create audio file
var addAudio= async (req, res) => {
  const audio = new Audio({
    songname: req.body.name,
    description: req.body.description,
    song:req.file.path,
    image:req.body.image
  });

  try {
    const savedAudio = await audio.save();
    res.json(savedAudio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Read audio files
var fetchAudio = async (req, res) => {
  try {
    const audioFiles = await Audio.find();
    res.json(audioFiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update audio file
var updateAudio = async (req, res) => {
  try {
    const updatedAudio = await Audio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAudio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete audio file
var deleteAudio = async (req, res) => {
  try {
    const deletedAudio = await Audio.findByIdAndDelete(req.params.id);
    res.json(deletedAudio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {addAudio, fetchAudio,updateAudio,deleteAudio};
