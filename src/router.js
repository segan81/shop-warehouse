/**Este archivo se crea para el control de single page applications */
import Vue from "vue";
import Router from "vue-router";

/**Rutas del proyecto */
import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Items from "@/views/Items";
import ItemDetail from "@/views/ItemDetail";
import Services from "@/views/Services";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "*",
      name: "error",
      component: Error
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/items",
      name: "items",
      component: Items
    },
    {
      path: "/item/:id",
      name: "item-detail",
      component: ItemDetail
    },
    {
      path: "/services",
      name: "services",
      component: Services
    }
  ]
});
