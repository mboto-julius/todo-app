import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: "active"
})

router.beforeEach((to, from) => {
    const store = useAuthStore()
    if(to.meta.auth && !store.isLoggedIn) {
        return { 
            name: "login",
            query: {
                redirect: to.fullPath,
            }
        };
    }
})

export default router