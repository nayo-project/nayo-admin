import Vue from "vue"
import App from "@/App.vue";
import nayoCore from "nayo-admin-core";

// layout
import { nayo_layout_1 } from "@/layout";
Vue.component("layout_1", nayo_layout_1)

import route_config from "@/configs/router.config";
import lang_config from "@/configs/lang.config";

Vue.use(nayoCore);

let nayo = new nayoCore(App);

// if you want to add new vuex options, you may be register it
// nayo.storeRegister({});
nayo.routerRegister(route_config);
nayo.langRegister(lang_config);

// here is the sample to add the title
// you may be use different title or may be different title in different route
document.title = "Nayo Admin";

nayo.admin.$mount("#app");