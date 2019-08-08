/*
* router config file
* */
import Cookie from "js-cookie";

import { home, lang, login, sub_page_1, sub_page_2 } from "@/pages";


let routers = [
    {
        name: "登录",
        path: "/login",
        independent: true,
        template: login
    },
    {
        name: "首页",
        path: "/home",
        icon: "ivu-icon-md-home",
        template: home
    },
    {
        name: "子页面",
        path: "/index",
        icon: "test-home",
        children: [
            {
                name: "子页1",
                path: "/sub_index_1",
                template: sub_page_1,
                icon: "ivu-icon-md-contacts"
            },
            {
                name: "子页2",
                path: "/sub_index_2/:id",
                template: sub_page_2,
                icon: "ivu-icon-md-contacts"
            }
        ]
    },
    {
        name: "多语言",
        path: "/lang",
        template: lang,
        icon: "ivu-icon-md-globe"
    }
];

// iView LoadingBar
window.$iView.LoadingBar.config({
  color: "#66ccff"  // bar color
});



// global intercept
routers.before = [
    (to, from, next) => {
        window.$iView.LoadingBar.start();
    },
    (to, from, next) => {
        if (Cookie.get("username") == "admin") {
            if (to.path == "/login") {
                next("/");
            } else {
                next();
            }
        } else {
            if (to.path == "/login") {
                next();
            } else {
                next("/login");
            }
        }
    },
    (to, from, next) => {
        console.log(to)  // here will run, so the function next() only has the function to direct the path, it can't stop this function
    }
]

routers.after = [
    (to, from) => {
        window.$iView.LoadingBar.finish();
    }
]

export default routers;