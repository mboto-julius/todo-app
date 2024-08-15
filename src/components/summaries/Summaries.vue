<template>
    <div>
        <p class="lead text-uppercase">{{ description }}</p>
        <ul>
            <Summary v-for="task in tasks" :key="task.id" :task="task" />
        </ul>
    </div>
</template>

<script setup>
import Summary from './Summary.vue';
defineProps({
    description: String,
    tasks: Array
})
</script>