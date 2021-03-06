///////////////////////////////////////////////////////////////////////////////////MODULES
const express = require('express');
const cors = require('cors');
//////////////////////////////////////////////////////////////////////////////////////CORS
const corsOptions = require('../utils/corsOptions');
///////////////////////////////////////////////////////////////////////////////////////SSH
const ssh = require('../utils/ssh');
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
    ssh({
      host: request.body.host,
      username: request.body.sshUsername,
      password: request.body.sshPassword,
      command: request.body.command,
    });
    return response.status(200).send({ message: 'Connection created successfully' });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: 'Connection creation failed', error: String(error) });
  }
});

module.exports = router;
