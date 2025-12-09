import { createRouter, createWebHistory } from "vue-router";
import RootLayout from "../layout/RootLayout.vue";
import HomePage from "../pages/HomePage.vue";
import Cart from "../pages/Cart.vue";
import Shop from "../pages/Shop.vue";

const routes = [
  {
    path: "/",
    component: RootLayout,
    children: [
      {
        path: "",
        component: HomePage,
      },
      {
        path:'/cart',
        component: Cart
      },
      {
        path:'/shop',
        component:Shop
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
