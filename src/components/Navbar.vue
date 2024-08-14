<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">
            <router-link :to="{ name: 'home' }" class="navbar-brand">
                <span>ToDo</span>
                <strong>List</strong>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" v-if="store.isLoggedIn">
                    <li class="nav-item">
                        <router-link :to="{ name: 'tasks' }" class="nav-link">Tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'summary' }" href="#" class="nav-link">Summary</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <template v-if="!store.isLoggedIn">
                        <li class="nav-item">
                            <router-link :to="{ name: 'login' }" class="btn btn-outline-secondary ms-2">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'register' }" href="#" class="btn btn-danger ms-2">Register</router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" :class="toggleClass" @click.prevent="toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ store.user.name }}
                            </a>
                            <ul class="dropdown-menu" :class="toggleClass" aria-labelledby="navbarDropdown">
                                <li><a href="#" class="dropdown-item" @click.prevent="logout">Logout</a></li>
                            </ul>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { ref, computed } from 'vue';

const router = useRouter()
const store = useAuthStore()
const isOpen = ref(false)

const logout = async () => {
    await store.handleLogout()
    isOpen.value = false
    router.push({
        name: 'login'
    })
}

const toggle = () => isOpen.value = !isOpen.value
const toggleClass = computed(() => isOpen.value === true ? 'show' : '')
</script>