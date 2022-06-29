import Mock from "mockjs";

Mock.mock(/\/api\/demo/, "get", () => {
    
    // const {body, type, url} = options;
    
    return Mock.mock({
        code: 201,
        message: "test message",
        "data|50-100": []    
    });
});


