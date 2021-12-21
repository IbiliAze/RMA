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
} from '../actions/types/types';
///////////////////////////////////////////////////////////////////////DEVICES DEFAULT STATE
const devicesDefaultState = {
  devices: [],
  isLoading: false,
};
/////////////////////////////////////////////////////////////////////////////DEVICES REDUCER
const devices = (state = devicesDefaultState, action) => {
  switch (action.type) {
    // GET request
    case GET_DEVICES_REQUEST:
      return {
        isLoading: true,
        devices: [...state.devices],
      };
    case GET_DEVICES_SUCCESS:
      return {
        isLoading: false,
        devices: [...action.devices],
      };
    case GET_DEVICES_FAILURE:
      return {
        isLoading: false,
        devices: [...state.devices],
      };

    // POST request
    case POST_DEVICE_REQUEST:
      return {
        isLoading: true,
        devices: [...state.devices],
      };
    case POST_DEVICE_SUCCESS:
      return {
        isLoading: false,
        devices: [...state.devices, action.device],
      };
    case POST_DEVICE_FAILURE:
      return {
        isLoading: false,
        devices: [...state.devices],
      };

    // PUT request
    case PUT_DEVICE_REQUEST:
      return {
        isLoading: true,
        devices: [...state.devices],
      };
    case PUT_DEVICE_SUCCESS:
      return {
        isLoading: false,
        devices: state.devices.map(device => {
          if (device._id === action.device._id) {
            return {
              ...device,
              ...action.device,
            };
          } else {
            return device;
          }
        }),
      };
    case PUT_DEVICE_FAILURE:
      return {
        isLoading: false,
        devices: [...state.devices],
      };

    // DELETE request
    case DELETE_DEVICE_REQUEST:
      return {
        isLoading: true,
        devices: [...state.devices],
      };
    case DELETE_DEVICE_SUCCESS:
      return {
        isLoading: false,
        devices: state.devices.filter(device => device._id !== action.device._id),
      };
    case DELETE_DEVICE_FAILURE:
      return {
        isLoading: false,
        devices: [...state.devices],
      };

    default:
      return state;
  }
};

export default devices;
