import Vue from "vue";
import VueRouter from "vue-router";
import AuthHandler from "./components/AuthHandler";
import UploadForm from "./components/UploadForm";
import ImageList from "./components/ImageList";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: ImageList, name: "home" },
    { path: "/oauth2/callback", component: AuthHandler },
    { path: "/upload", component: UploadForm, name: "upload"  },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  next();
});

export default router;
