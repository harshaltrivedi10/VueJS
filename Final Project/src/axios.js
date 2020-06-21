import Axios from "axios";

const HTTP = Axios.create({
  baseURL: `https://stock-portfolio-831d8.firebaseio.com/`,
  params: {},
});

export default HTTP;
