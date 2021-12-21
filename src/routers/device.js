///////////////////////////////////////////////////////////////////////////////////MODULES
const express = require('express');
const cors = require('cors');
////////////////////////////////////////////////////////////////////////////////////MODELS
const Device = require('../models/device');
//////////////////////////////////////////////////////////////////////////////////////CORS
const corsOptions = require('../utils/corsOptions');
////////////////////////////////////////////////////////////////////////////////////ROUTER
const router = new express.Router();
//////////////////////////////////////////////////////////////////////////////////////////

// Routes
// OPTIONS /api/device
router.options('/device', cors(corsOptions), async (request, response) => {
  return response.end();
});
// OPTIONS /api/device/:id
router.options('/device/:id', cors(corsOptions), async (request, response) => {
  return response.end();
});

// POST /api/device
router.post('/device', cors(corsOptions), async (request, response) => {
  const device = new Device({ ...request.body });
  try {
    await device.save();
    return response.status(201).send({ device, message: 'Device saved successfully' });
  } catch (error) {
    return response.status(500).send({ message: 'Device creation failed', error: String(error) });
  }
});

// GET /api/device
router.get('/device', cors(corsOptions), async (request, response) => {
  try {
    const devices = await Device.find();
    return response.status(200).send(devices);
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: 'Devices fetch failed', error: String(error) });
  }
});

// PUT /api/device by ID
router.put('/device/:id', cors(corsOptions), async (request, response) => {
  try {
    const deviceId = request.params.id;
    const device = await Device.findOne({ _id: deviceId });
    if (!device) {
      return response.status(404).send({ message: 'Device not found', id: deviceId });
    }

    for (const key in request.body) {
      device[key] = request.body[key];
    }
    await device.save();
    return response.status(200).send({ device, message: 'Device updated successfully' });
  } catch (error) {
    return response.status(500).send({ message: 'Device update failed', error: String(error) });
  }
});

// DELETE /api/device by ID
router.delete('/device/:id', cors(corsOptions), async (request, response) => {
  try {
    const deviceId = request.params.id;
    const device = await Device.findOne({ _id: deviceId });
    if (!device) {
      return response.status(404).send({ message: 'Device not found', id: deviceId });
    }

    await device.remove();
    return response.status(200).send({ device, message: 'Device deleted successfully' });
  } catch (error) {
    return response.status(500).send({ message: 'Device delete failed', error: String(error) });
  }
});

module.exports = router;
