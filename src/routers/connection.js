///////////////////////////////////////////////////////////////////////////////////MODULES
const express = require('express');
const cors = require('cors');
//////////////////////////////////////////////////////////////////////////////////////CORS
const corsOptions = require('../utils/corsOptions');
////////////////////////////////////////////////////////////////////////////////////ROUTER
const router = new express.Router();
//////////////////////////////////////////////////////////////////////////////////////////

// Routes
// OPTIONS /api/connection
router.options('/connection', cors(corsOptions), async (request, response) => {
  return response.end();
});
// OPTIONS /api/connection/:id
router.options('/connection/:id', cors(corsOptions), async (request, response) => {
  return response.end();
});

// POST /api/connection
router.post('/connection', cors(corsOptions), async (request, response) => {
  try {
    return response.status(201).send({ message: 'Connection saved successfully' });
  } catch (error) {
    return response.status(500).send({ message: 'Connection creation failed', error: String(error) });
  }
});

module.exports = router;
