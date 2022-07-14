export default [
    {
        name: "test",
        path: "/test",
        component: () => import("@/views/test"),
        meta: {
            title: "测试页面",
            permission: []
        },
        children: []
    },
];