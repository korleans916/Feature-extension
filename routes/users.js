var express = require('express');
var router = express.Router();
const db = require("../model/helper");


// POST endpoint to store user information
router.post("/user", async (req, res, next) => {
  try {
    const username = req.body; // Exctract the user information from the request body
    const newUser = await User.create({username}); // Creates a new user in the database
    res.status(201).json({message:"User created succesfully", user: newUser});
  }catch (error) {
    console.error(error);
    res.status(500).json({message:"Internal server error"});
  } 
  });

// POST endpoint to store color analysis data
  router.post('/color-analysis', async (req, res, next) => {
    try {
      const { userId, skinTone, hairColor, eyeColor, analysisResult } = req.body; // Extract color analysis data from the request body
      const newColorAnalysis = await ColorAnalysis.create({ // Store color analysis data in the database
        user_id: userId, 
        skin_tone: skinTone, 
        hair_color: hairColor, 
        eye_color: eyeColor, 
        analysis_result: analysisResult 
      });
    res.status(201).json({ message: 'Color analysis data stored successfully', colorAnalysis: newColorAnalysis }); // Success message storing the color analysis in the db
    } catch (error) { // Handle errors
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  
  

module.exports = router;
