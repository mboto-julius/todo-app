<template>
    <div class="container text-center py-5">
        <h1>404</h1>
        <p>Sorry, the page <code>{{ $route.params.notFound }}</code> you're lookin for is not found</p>
        <router-link :to="{ name: 'tasks' }">Back to your tasks</router-link>
    </div>
</template>