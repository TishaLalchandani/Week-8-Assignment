const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/catfact', async (req, res, next) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
