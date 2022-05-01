import axios from "axios";

axios.interceptors.response.use((response) => response, error => {

  return Promise.reject(error);
});
const post = (url = "", data = "", config = {}) => {
  return axios.post(url, data, config);
};

const get = url => {
  return axios(url);
};

const HttpClient = {
  post,
  get,
};

export default HttpClient;
