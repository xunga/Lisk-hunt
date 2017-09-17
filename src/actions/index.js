import axios from "axios";
import app_settings from "../config";

export const fetchDelegates = async () => {
  try {
    const request = axios.get(`${app_settings.backend_url}/get_delegates_list`);

    return {
      type: "FETCH_DELEGATES_SUCCESS",
      payload: request
    };
  } catch (error) {
    return {
      type: "FETCH_DELEGATES_ERROR",
      payload: error.message
    };
  }
};
