import Vue from "vue";
import Vuex from "vuex";
import combine_config from "./combine";

Vue.use(Vuex);

export default new Vuex.Store(combine_config);
