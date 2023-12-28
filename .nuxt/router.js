import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6190b780 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _1e3f5684 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _396ec3bc = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _03155278 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _3d1147a9 = () => interopDefault(import('..\\pages\\admin\\categories\\index.vue' /* webpackChunkName: "pages/admin/categories/index" */))
const _1154cbba = () => interopDefault(import('..\\pages\\admin\\customers\\index.vue' /* webpackChunkName: "pages/admin/customers/index" */))
const _641f501b = () => interopDefault(import('..\\pages\\admin\\dashboard\\index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _bc307942 = () => interopDefault(import('..\\pages\\admin\\invoices\\index.vue' /* webpackChunkName: "pages/admin/invoices/index" */))
const _367e665c = () => interopDefault(import('..\\pages\\admin\\login.vue' /* webpackChunkName: "pages/admin/login" */))
const _c4368bbe = () => interopDefault(import('..\\pages\\admin\\products\\index.vue' /* webpackChunkName: "pages/admin/products/index" */))
const _933ab506 = () => interopDefault(import('..\\pages\\admin\\sliders\\index.vue' /* webpackChunkName: "pages/admin/sliders/index" */))
const _49c7a6a7 = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _8fc53384 = () => interopDefault(import('..\\pages\\customer\\dashboard\\index.vue' /* webpackChunkName: "pages/customer/dashboard/index" */))
const _628cdcdc = () => interopDefault(import('..\\pages\\customer\\invoices\\index.vue' /* webpackChunkName: "pages/customer/invoices/index" */))
const _1dde6fce = () => interopDefault(import('..\\pages\\customer\\login.vue' /* webpackChunkName: "pages/customer/login" */))
const _6392a3ba = () => interopDefault(import('..\\pages\\customer\\register.vue' /* webpackChunkName: "pages/customer/register" */))
const _303da6ad = () => interopDefault(import('..\\pages\\admin\\categories\\create\\index.vue' /* webpackChunkName: "pages/admin/categories/create/index" */))
const _07932125 = () => interopDefault(import('..\\pages\\admin\\products\\create\\index.vue' /* webpackChunkName: "pages/admin/products/create/index" */))
const _6d8df081 = () => interopDefault(import('..\\pages\\admin\\sliders\\create\\index.vue' /* webpackChunkName: "pages/admin/sliders/create/index" */))
const _639c27ab = () => interopDefault(import('..\\pages\\admin\\users\\create\\index.vue' /* webpackChunkName: "pages/admin/users/create/index" */))
const _0e04e6c7 = () => interopDefault(import('..\\pages\\admin\\categories\\edit\\_id.vue' /* webpackChunkName: "pages/admin/categories/edit/_id" */))
const _6b540bea = () => interopDefault(import('..\\pages\\admin\\invoices\\show\\_id.vue' /* webpackChunkName: "pages/admin/invoices/show/_id" */))
const _1a6a5d3f = () => interopDefault(import('..\\pages\\admin\\products\\edit\\_id.vue' /* webpackChunkName: "pages/admin/products/edit/_id" */))
const _0a5796c5 = () => interopDefault(import('..\\pages\\admin\\users\\edit\\_id.vue' /* webpackChunkName: "pages/admin/users/edit/_id" */))
const _3b466e90 = () => interopDefault(import('..\\pages\\customer\\invoices\\show\\_snap_token.vue' /* webpackChunkName: "pages/customer/invoices/show/_snap_token" */))
const _1c88b53c = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _37b82274 = () => interopDefault(import('..\\pages\\products\\_slug.vue' /* webpackChunkName: "pages/products/_slug" */))
const _ff4ffac0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _6190b780,
    name: "cart"
  }, {
    path: "/categories",
    component: _1e3f5684,
    name: "categories"
  }, {
    path: "/products",
    component: _396ec3bc,
    name: "products"
  }, {
    path: "/search",
    component: _03155278,
    name: "search"
  }, {
    path: "/admin/categories",
    component: _3d1147a9,
    name: "admin-categories"
  }, {
    path: "/admin/customers",
    component: _1154cbba,
    name: "admin-customers"
  }, {
    path: "/admin/dashboard",
    component: _641f501b,
    name: "admin-dashboard"
  }, {
    path: "/admin/invoices",
    component: _bc307942,
    name: "admin-invoices"
  }, {
    path: "/admin/login",
    component: _367e665c,
    name: "admin-login"
  }, {
    path: "/admin/products",
    component: _c4368bbe,
    name: "admin-products"
  }, {
    path: "/admin/sliders",
    component: _933ab506,
    name: "admin-sliders"
  }, {
    path: "/admin/users",
    component: _49c7a6a7,
    name: "admin-users"
  }, {
    path: "/customer/dashboard",
    component: _8fc53384,
    name: "customer-dashboard"
  }, {
    path: "/customer/invoices",
    component: _628cdcdc,
    name: "customer-invoices"
  }, {
    path: "/customer/login",
    component: _1dde6fce,
    name: "customer-login"
  }, {
    path: "/customer/register",
    component: _6392a3ba,
    name: "customer-register"
  }, {
    path: "/admin/categories/create",
    component: _303da6ad,
    name: "admin-categories-create"
  }, {
    path: "/admin/products/create",
    component: _07932125,
    name: "admin-products-create"
  }, {
    path: "/admin/sliders/create",
    component: _6d8df081,
    name: "admin-sliders-create"
  }, {
    path: "/admin/users/create",
    component: _639c27ab,
    name: "admin-users-create"
  }, {
    path: "/admin/categories/edit/:id?",
    component: _0e04e6c7,
    name: "admin-categories-edit-id"
  }, {
    path: "/admin/invoices/show/:id?",
    component: _6b540bea,
    name: "admin-invoices-show-id"
  }, {
    path: "/admin/products/edit/:id?",
    component: _1a6a5d3f,
    name: "admin-products-edit-id"
  }, {
    path: "/admin/users/edit/:id?",
    component: _0a5796c5,
    name: "admin-users-edit-id"
  }, {
    path: "/customer/invoices/show/:snap_token?",
    component: _3b466e90,
    name: "customer-invoices-show-snap_token"
  }, {
    path: "/categories/:slug",
    component: _1c88b53c,
    name: "categories-slug"
  }, {
    path: "/products/:slug",
    component: _37b82274,
    name: "products-slug"
  }, {
    path: "/",
    component: _ff4ffac0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
