import TasksPage from "@/pages/TasksPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import SummaryPage from "@/pages/SummaryPage.vue";
import ErrorPage from "@/pages/errors/ErrorPage.vue";

const routes = [
    {
        path: "/tasks",
        component: TasksPage,
        name: 'tasks'
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
        name: 'summary'
    },
    {
        path: "/:notFound(.*)",
        name: 'error.404',
        component: ErrorPage,
    }
]

export default routes