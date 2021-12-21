///////////////////////////////////////////////////////////////////////////////////MODULES
const mongoose = require('mongoose');
//////////////////////////////////////////////////////////////////////////////////////////

// Schema
const deviceSchema = new mongoose.Schema(
  {
    host: {
      type: String,
      trim: true,
      required: true,
    },
    sshUsername: {
      type: String,
      trim: true,
      required: true,
    },
    sshPassword: {
      type: String,
      trim: true,
      required: true,
    },
    sshPort: {
      type: Number,
      required: false,
      default: 22,
    },
    description: {
      type: String,
      trim: true,
      required: false,
      default: '',
    },
    os: {
      type: String,
      trim: true,
      required: true,
      default: 'Windows',
      enum: ['Windows', 'OSX', 'Linux'],
    },
  },
  {
    timestamps: true,
  }
);

// Functions
deviceSchema.methods.toJSON = function () {
  const device = this;
  const deviceObject = device.toObject();

  delete deviceObject.__v;

  return deviceObject;
};

// Model
const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
