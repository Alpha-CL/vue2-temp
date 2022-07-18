import router from "./index";
import NProgress from "nprogress";

const routerWhiteList = [];

const token = '';

router.beforeEach((to, from, next) => {

    NProgress.start();

    if (token) {

        if(to.path === '/login') {

            next('/');
            NProgress.done();
        }

    } else {

        if (routerWhiteList.includes(to.path)) {

            next();

        } else {

            next('/login');
            NProgress.done();
        }
    }
});

router.afterEach((to, from) => {
    NProgress.done();
});
