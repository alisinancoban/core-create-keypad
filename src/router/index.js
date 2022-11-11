import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/store'
import Home from '../views/home/Home.vue'
import Keypads from '../views/configuration/components/Keypads.vue'

const routes = [
  {
    path: "/", redirect: "/configuration/keypads", component: Home, name: "Home",
    leaf: true,
    children: [
      {
        path: "configuration", name: "Configuration",
        component: () => import('../views/configuration/Configuration.vue'),
        meta: {
          title: "main-page",
          icon: "fa fa-tachometer-alt fa-fw"
        },
        children: [
          {
            path: "keypads", name: "Keypads",
            component: () => import('../views/configuration/components/Keypads.vue'),
            meta: {
              title: "keypads",
              icon: "fa fa-hdd fa-fw"
            }
          },

          {
            path: "materials", name: "Materials",
            component: () => import('../views/configuration/components/Materials.vue'),
            meta: {
              title: "materials"
            }
          },

          {
            path: "format", name: "Format",
            component: () => import('../views/configuration/components/Format.vue'),
            meta: {
              title: "format"
            }
          },

          {
            path: "product", name: "Product",
            component: () => import('../views/configuration/components/Product.vue'),
            meta: {
              title: "format"
            }
          },

          {
            path: "style", name: "Style",
            component: () => import('../views/configuration/components/Style.vue'),
            meta: {
              title: "style"
            }
          },

          {
            path: "engraving", name: "Engraving",
            component: () => import('../views/configuration/components/Engraving.vue'),
            meta: {
              title: "engraving"
            }
          },
          {
            path: "create", name: "Create",
            component: () => import('../views/configuration/components/Create.vue'),
            meta: {
              title: "create"
            }
          },
        ]
      }
    ]
  },

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   const activeStep = store.getters.getActiveStep
//   console.log("BeforeEach : " + to.path)
  
//   if (activeStep == 1) {
//     next("/configuration/keypads")
//   } else if (activeStep == 2) {
//     next("/configuration/materials")
//   } else if (activeStep == 3) {
//     next("/configuration/format")
//   } 
//   // else {
//   //   next();
//   // }
// })

export default router
