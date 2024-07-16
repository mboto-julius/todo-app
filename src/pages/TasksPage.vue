<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTask @added="handleAddedTask" />

                    <!-- List of uncompleted tasks -->
                    <Tasks :tasks="uncompletedTasks"
                        @updated="handleUpdatedTask"
                        @completed="handleCompletedTask"
                    />
                    
                    <!-- show toggle button -->
                    <div class="text-center my-3" v-show="showToggleCompletedBtn">
                        <button class="btn btn-sm btn-secondary" 
                                @click="$event => showCompletedTasks = !showCompletedTasks">
                            <span v-if="!showCompletedTasks">Show Completed Task</span>
                            <span v-else>Hide Completed Task</span>
                        </button>
                    </div>

                    <!-- List of completed tasks -->
                    <Tasks :tasks="completedTasks" 
                        :show="completedTasksIsVisible && showCompletedTasks"
                        @updated="handleUpdatedTask"
                        @completed="handleCompletedTask"
                    />
                </div>
            </div>
        </div>
    </main>
</template>


<script setup>

import { computed, onMounted, ref } from "vue"
import { allTasks, createTask, updateTask, completeTask } from "../http/task-api.js"
import Tasks from "../components/tasks/Tasks.vue"
import NewTask from "../components/tasks/NewTask.vue"

const tasks = ref([])

onMounted(async () => {
    const  { data } = await allTasks()
    tasks.value = data.data
})

const uncompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed) )
const completedTasks = computed(() => tasks.value.filter(task => task.is_completed) )

const showToggleCompletedBtn = computed(
    () => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0
)

const completedTasksIsVisible = computed(
    () => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0
)

const showCompletedTasks = ref(false)

const handleAddedTask = async (newTask) => {
    const { data: createdTask } = await createTask(newTask)
    tasks.value.unshift(createdTask.data) 
}

const handleUpdatedTask = async (task) => {
    const { data: updatedTask } = await updateTask(task.id, {
        name: task.name
    })
    
    const currentTaskBeingEdited = tasks.value.find(item => item.id === task.id)
    currentTaskBeingEdited.name = updatedTask.data.name
}

const handleCompletedTask = async (task) => {
    const { data: updatedTask } = await completeTask(task.id, {
        is_completed: task.is_completed
    })

    const currentTaskBeingEdited = tasks.value.find(item => item.id === task.id)
    currentTaskBeingEdited.is_completed = updatedTask.data.is_completed
}

</script>