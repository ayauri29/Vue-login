import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import Registro from "../components/Registro";
import List from "../components/ListUsers";
// import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/login",
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/registro",
    name: "registro",
    component: Registro,
  },
  {
    path: "/list",
    name: "list",
    component: List,
    /* meta: {
      requiresAuth: true
    } */
  }
];

const router = new VueRouter({
  routes
});

/* router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  console.log(currentUser);
  // Requiere auth?
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login')
  } else if (!requiresAuth && currentUser) {
    next('list');
  } else { 
    next()
  }
}) */

export default router;
