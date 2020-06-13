import Axios from "axios"

const HTTP = Axios.create({
  baseURL: `https://vue-axios-test-9c298.firebaseio.com/`,
  params:{}
})

HTTP.interceptors.request.use(config => {
  if (config.method == 'post') {
    config.method = 'put';
  }
  return config;
}, error =>  {
  return Promise.reject(error);
})

HTTP.interceptors.response.use(response => {
    response.data = {messages: response.data};
    return response;
}, error => {
    return Promise.reject(error);
})

export default HTTP;