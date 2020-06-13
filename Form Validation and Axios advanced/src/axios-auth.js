import axios from "axios";

const instance = axios.create({
    baseURL: "https://form-validation-and-vue.firebaseio.com"
})

instance.defaults.headers.common["SOMETHINGS"] = 'lalala';

export default instance