import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"
import { useAuthStore } from "../stores/auth";

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: "active"
})

router.beforeEach(async (to, from) => {
    const store = useAuthStore()
    await store.fetchUser()
    if(to.meta.auth && !store.isLoggedIn) {
        return { 
            name: "login",
            query: {
                redirect: to.fullPath,
            }
        };
    } else if (to.meta.guest && store.isLoggedIn){
        return {
            name: "tasks"
        }
    }
})

export default router