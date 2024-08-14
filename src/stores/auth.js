import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";  
import { csrfCookie, login, logout, register, getUser } from "../http/auth-api.js";

export const useAuthStore = defineStore("authStore", () => {

    const user = ref(null)
    const errors = ref({})

    const isLoggedIn = computed(() => !!user.value)

    const fetchUser = async () => {
        try {
            const { data } = await getUser()
            user.value = data
        } catch (error) {
            user.value = null
        }
    }

    const handleLogin = async (credentials) => {
        await csrfCookie()
        try {
            await login(credentials)
            await fetchUser()
            errors.value = {}
        } catch (error) {
            if (error.response && error.response.status === 422){
                errors.value = error.response.data.errors
            }
        }
    }

    const handleRegister = async (newUser) => {
        try {
            await register(newUser)
            await handleLogin({
                email: newUser.email,
                password: newUser.password
            })
        } catch (error) {
            if (error.response && error.response.status === 422){
                errors.value = error.response.data.errors
            }
        }
    }

    const handleLogout = async () => {
        await logout()
        user.value = null
    }

    return {
        user,
        errors,
        isLoggedIn,
        fetchUser,
        handleRegister,
        handleLogin,
        handleLogout
    }
    
})



