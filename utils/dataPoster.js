import { BASE_URL } from './dataFetcher';
import axios from 'axios';
export const postDataToAPI = async (
  apiEndpoint,
  body,
  resolve,
  reject = () => {},
  config = {}
) => {
  axios
    .post(BASE_URL + apiEndpoint, body, config)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log('An error occurred:', error.response?.data);
      reject(error);
      return;
    });
};

export const putDataToAPI = async (
  apiEndpoint,
  body,
  config = {},
  resolve,
  reject = () => {}
) => {
  axios
    .put(BASE_URL + apiEndpoint, body, config)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      console.log('An error occurred:', error.response.data);
      reject(error);
      return;
    });
};
