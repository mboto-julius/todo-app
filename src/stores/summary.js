import { defineStore } from "pinia";
import { ref } from "vue";  
import { tasksSummary } from "@/http/summary-api";

export const useSummaryStore = defineStore("summaryStore", () => {
    const summaries = ref([])

    const fetchTasksSummary = async () => {
        const { data } = await tasksSummary()
        summaries.value = data
    }

    return {
        summaries,
        fetchTasksSummary
    }
})