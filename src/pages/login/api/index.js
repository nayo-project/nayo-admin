import Cookie from "js-cookie";


export const login = (data) => {
    return new Promise((resolve, reject) => {
        if (data.username == "admin") {
            Cookie.set("username", "admin");
            resolve(true);
        } else {
            resolve(false);
        }
    })
}

