import TasksPage from "@/pages/TasksPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import SummaryPage from "@/pages/SummaryPage.vue";
import ErrorPage from "@/pages/errors/ErrorPage.vue";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
        name: 'home',
    },
    {
        path: "/tasks",
        component: TasksPage,
        name: 'tasks',
        // meta: {
        //     auth: true
        // }
    },
    {
        path: "/login",
        component: LoginPage,
        name: 'login'
    },
    {
        path: "/register",
        component: RegisterPage,
        name: 'register'
    },
    {
        path: "/summary",
        component: SummaryPage,
        name: 'summary',
        // meta: {
        //     auth: true
        // }
    },
    {
        path: "/:notFound(.*)",
        name: 'error.404',
        component: ErrorPage,
    }
]

export default routes