///////////////////////////////////////////////////////////////////////////////////MODULES
import axios from 'axios';
/////////////////////////////////////////////////////////////////////////////////////TYPES
import {
  GET_DEVICES_REQUEST,
  GET_DEVICES_SUCCESS,
  GET_DEVICES_FAILURE,
  POST_DEVICE_REQUEST,
  POST_DEVICE_SUCCESS,
  POST_DEVICE_FAILURE,
  PUT_DEVICE_REQUEST,
  PUT_DEVICE_SUCCESS,
  PUT_DEVICE_FAILURE,
  DELETE_DEVICE_REQUEST,
  DELETE_DEVICE_SUCCESS,
  DELETE_DEVICE_FAILURE,
} from './types/types';
///////////////////////////////////////////////////////////////////////////////////ACTIONS
import { returnMessages } from './message';
/////////////////////////////////////////////////////////////////////////////////////UTILS
import errorParser from '../utils/errorParser';
//////////////////////////////////////////////////////////////////////////////////////////

// GET /api/device
export const getDevicesRequest = () => ({
  type: GET_DEVICES_REQUEST,
});

export const getDevicesSuccess = devices => ({
  type: GET_DEVICES_SUCCESS,
  devices,
});

export const getDevicesFailure = errorMessage => ({
  type: GET_DEVICES_FAILURE,
  errorMessage,
});

export const getDevices = endpoint => async dispatch => {
  dispatch(getDevicesRequest()); // Will set loading to true
  dispatch(returnMessages({ text: null, id: null }, null, GET_DEVICES_REQUEST));

  try {
    const response = await axios.get(
      endpoint === undefined ? 'http://localhost:5000/api/device' : `http://localhost:5000/api/device${endpoint}`
    );

    dispatch(returnMessages({ text: response.data.message, id: null }, response.status, GET_DEVICES_SUCCESS));
    dispatch(getDevicesSuccess(response.data));
  } catch (error) {
    dispatch(
      returnMessages(
        { text: errorParser(error), id: null },
        error.response ? error.response.status : 500,
        GET_DEVICES_FAILURE
      )
    );
    dispatch(getDevicesFailure(error.message));
  }
};

// POST /api/device
export const postDeviceRequest = () => ({
  type: POST_DEVICE_REQUEST,
});

export const postDeviceSuccess = device => ({
  type: POST_DEVICE_SUCCESS,
  device,
});

export const postDeviceFailure = errorMessage => ({
  type: POST_DEVICE_FAILURE,
  errorMessage,
});

export const postDevice =
  ({ deviceName, description, country, department, type, floor }) =>
  async dispatch => {
    dispatch(postDeviceRequest());
    dispatch(returnMessages({ text: null, id: deviceName }, null, POST_DEVICE_REQUEST));

    const data = { deviceName, description, country, department, type, floor };

    try {
      const response = await axios.post('http://localhost:5000/api/device', data);

      dispatch(returnMessages({ text: response.data.message, id: deviceName }, response.status, POST_DEVICE_SUCCESS));
      dispatch(postDeviceSuccess(response.data.device));
    } catch (error) {
      dispatch(
        returnMessages(
          { text: errorParser(error), id: deviceName },
          error.response ? error.response.status : 500,
          POST_DEVICE_FAILURE
        )
      );
      dispatch(postDeviceFailure(error.message));
    }
  };

// PUT /api/device
export const putDeviceRequest = () => ({
  type: PUT_DEVICE_REQUEST,
});

export const putDeviceSuccess = device => ({
  type: PUT_DEVICE_SUCCESS,
  device,
});

export const putDeviceFailure = errorMessage => ({
  type: PUT_DEVICE_FAILURE,
  errorMessage,
});

export const putDevice =
  ({ deviceId, description, country, department, type, floor }) =>
  async dispatch => {
    dispatch(putDeviceRequest());
    dispatch(returnMessages({ text: null, id: deviceId }, null, PUT_DEVICE_REQUEST));

    try {
      const response = await axios.put(`http://localhost:5000/api/device/${deviceId}`, {
        description,
        country,
        department,
        type,
        floor,
      });

      dispatch(returnMessages({ text: response.data.message, id: deviceId }, response.status, PUT_DEVICE_SUCCESS));
      dispatch(putDeviceSuccess(response.data.device));
    } catch (error) {
      dispatch(
        returnMessages(
          { text: errorParser(error), id: deviceId },
          error.response ? error.response.status : 500,
          PUT_DEVICE_FAILURE
        )
      );
      dispatch(putDeviceFailure(error.message));
    }
  };

// DELETE /api/device
export const deleteDeviceRequest = () => ({
  type: DELETE_DEVICE_REQUEST,
});

export const deleteDeviceSuccess = device => ({
  type: DELETE_DEVICE_SUCCESS,
  device,
});

export const deleteDeviceFailure = errorMessage => ({
  type: DELETE_DEVICE_FAILURE,
  errorMessage,
});

export const deleteDevice = deviceId => async dispatch => {
  dispatch(deleteDeviceRequest());
  dispatch(returnMessages({ text: null, id: deviceId }, null, DELETE_DEVICE_REQUEST));

  try {
    const response = await axios.delete(`http://localhost:5000/api/device/${deviceId}`);

    dispatch(returnMessages({ text: response.data.message, id: deviceId }, response.status, DELETE_DEVICE_SUCCESS));
    dispatch(deleteDeviceSuccess(response.data.device));
  } catch (error) {
    dispatch(
      returnMessages(
        { text: errorParser(error), id: deviceId },
        error.response ? error.response.status : 500,
        DELETE_DEVICE_FAILURE
      )
    );
    dispatch(deleteDeviceFailure(error.message));
  }
};
