import request from "./request";


export const getDemo = async (params, data) => (request({
    url: "/api/demo",
    method: "GET",
    params,
    data
}));