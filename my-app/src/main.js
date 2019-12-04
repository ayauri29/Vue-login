import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import firebase from 'firebase';
import 'firebase/firestore';

Vue.use(ElementUI);
Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyBvC2PBXLrfGKgg7eGrOh-y4U5IyJqXmpI",
  authDomain: "login-vue-460ed.firebaseapp.com",
  databaseURL: "https://login-vue-460ed.firebaseio.com",
  projectId: "login-vue-460ed",
  storageBucket: "login-vue-460ed.appspot.com",
  messagingSenderId: "1014418147514",
  appId: "1:1014418147514:web:11c4848625e48be9931a83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");





