<template>
    <li> [{{ task.created_at }}] {{ task.name }}</li>
</template>

<script setup>
defineProps({
    task: Object
})
</script>