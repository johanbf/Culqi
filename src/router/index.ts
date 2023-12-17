import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";
import RecargasPagosView from "../view/RecargasPagosView.vue";
import HomeView from "../view/HomeView.vue";
import RecargasView from "../view/RecargasView.vue";
import Error404 from "../view/Error404.vue";
const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomeView },
    { path: '/recargas-pagos', component: RecargasPagosView, meta: { requiresAuth: true } },
    { path: '/recargas', component:  RecargasView, meta: { requiresAuth: true } },
    { path: '/pago-de-servicios', component: import( /* webpackChunkName: "pago-de-servicios"  */ '../view/PagoServiciosView.vue'), meta: { requiresAuth: true } },
    { path: '/historial-ganancias-operaciones', component:  import( /* historial-ganancias-operaciones: "pago-de-servicios"  */ '../view/HistorialGanaciasOperacionesView.vue'), meta: { requiresAuth: true } },
    { path: '/error-401', component:  import( /* webpackChunkName: "error-401"  */ '../view/Error401.vue') },
    { path: '/:pathMatch(.*)*', component:  Error404 },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, _, next) => {
    if(to.matched.some(router => router.meta.requiresAuth)){
        if(!localStorage.getItem('token')){
            next('error-401')
        }else{
            next()
        }
    }else{
        next()
    }
})

export default router