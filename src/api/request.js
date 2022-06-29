import axios from "axios";
import {Message, Notification} from "element-ui"; // MessageBox


// user token
const token = "";


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
        config.headers = {};

        if (token) {
            config.headers["Authorization"] = token;
        }

        return config;
    },
    (err) => {

        Promise.reject(err);
    });


// response interceptor
service.interceptors.response.use(
    (res) => {

        // parse data as json
        if (typeof res.data === "string") {
            res = JSON.parse(res.data);
        }

        // response code
        const code = res.code;

        if (+code !== 200) {

            Notification.error({
                title: "Request warning",
                message: res.data.message || '',
                type: "warning"
            });

            return null;

        } else {

            return res;
        }
    },
    (err) => {

        Message({
            message: err.message,
            type: "error",
            duration: 5 * 1000
        });
    },
);


export default service;