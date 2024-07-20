import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";  
import { csrfCookie, login, logout, register, getUser } from "../http/auth-api.js";

export const useAuthStore = defineStore("authStore", () => {

    const user = ref(null)

    const isLoggedIn = computed(() => !!user.value)

    const fetchUser = async () => {
        const { data } = await getUser()
        user.value = data
    }

    const handleLogin = async (credentials) => {
        await csrfCookie()
        await login(credentials)
        await fetchUser() 
    }

    const handleRegister = async (newUser) => {
        await register(newUser)
        await handleLogin({
            email: newUser.email,
            password: newUser.password
        })
    }

    const handleLogout = async () => {
        await logout()
        user.value = null
    }

    return {
        user,
        isLoggedIn,
        fetchUser,
        handleRegister,
        handleLogin,
        handleLogout
    }
    
})



