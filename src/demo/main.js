/**
 * Created by mendieta on 4/28/17.
 */

import Vue from "vue";
import "gsap";
import VueTransitionGroupPlus from "../index";
import App from "./components/App.vue";

Vue.use(VueTransitionGroupPlus);

new Vue({
    el: "#app",
    render: h => h(App)
});