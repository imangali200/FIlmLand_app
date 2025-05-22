import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/HomePage.vue'
import Search from "../pages/search.vue";
import MoreInfo from '../pages/moreInfoAboutMovie.vue'
import genres from '../pages/genres.vue'
import signIn from "../pages/signIn.vue";
import Message from "../pages/message.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
  { path: "/moreInfo:id", name: "MoreInfo", component: MoreInfo },
  { path: "/genres/:genre", name: "genres", component: genres },
  {path:'/signIn',component:signIn},
  {path:'/message',component:Message}
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
export default router