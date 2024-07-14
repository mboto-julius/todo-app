<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <div class="relative">
                        <input type="text" class="form-control form-control-lg padding-right-lg"
                            placeholder="+ Add new task. Press enter to save." />
                    </div>

                    <!-- List of uncompleted tasks -->
                    <Tasks :tasks="uncompletedTask" />
                    
                    <!-- show toggle button -->

                    
                    <!-- List of completed tasks -->
                    <Tasks :tasks="completedTask" />

                </div>
            </div>
        </div>
    </main>
</template>


<script setup>

import { computed, onMounted, ref } from "vue"
import { allTasks } from "../http/task-api.js"
import Tasks from "../components/tasks/Tasks.vue"

const tasks = ref([])

onMounted(async () => {
    const  { data } = await allTasks()
    tasks.value = data.data
})

const uncompletedTask = computed(() => tasks.value.filter(task => !task.is_completed) )

const completedTask = computed(() => tasks.value.filter(task => task.is_completed) )

</script>