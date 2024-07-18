import { defineStore } from "pinia";
import { allTasks} from "../http/task-api.js"

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        task: {
            id: 1,
            name: "First task",
            is_completed: false
        }
    }),
    getters: {
        completedTasks: (state) => state.tasks.filter(task => task.is_completed),
        uncompletedTasks () {
            return this.tasks.filter(task => !task.is_completed)
        }
    },
    actions: {
        async fetchAllTasks() {
            const  { data } = await allTasks()
            this.tasks = data.data 
        }
    }
})