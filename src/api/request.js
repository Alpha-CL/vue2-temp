
import axios from "axios";
import {Notification, MessageBox, Message} from "element-ui";


// custom header
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";


// create axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000
});


// request interceptor
service.interceptors.response.use(
(config) => {

    config.data = JSON.stringify(config.data);
    config.headers = {
    };
    
    // if (getToken()) {
    //     config.headers["Authorization"] = getToken(); 
    // }
    
    return config;
},
(err) => {

    Promise.reject(err);
});


// response interceptor
service.interceptors.response.use(
(res) => {
    
    // response code
    const code = res.data.code;

    if(code === 400) {

    } else if(code === 401) {

    } else if(code === 500) {

    } else if(code === 501) {

    } else if(code !== 200) {

        // other code status
        Notification.error({
            title: res.data.msg
        });

    } else {

        // response data
        return res.data;
    }
},
(err) => {
    
    Message({
        message: "",        // err.message
        type: "error",
        duration: 5 * 1000
    });
},
);


export default service;

