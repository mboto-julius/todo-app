<template>
    <div class="card mt-2" v-if="tasks.length">
        <ul class="list-group list-group-flush">
            <Task  v-for="task in tasks" :task="task" :key="task.id" />
        </ul>
    </div>
</template>

<script setup>
import Task from "./Task.vue"
defineProps({
    tasks:Array
})
</script>