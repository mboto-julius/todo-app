<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h3 class="mb-4"> Summary <small class="text-muted">(Tasks this week)</small></h3>
                    <div v-for="(tasks, description) in summaries" :key="description">
                        <Summaries :tasks="tasks" :description="description" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useSummaryStore } from "../stores/summary";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import Summaries from "../components/summaries/Summaries.vue";

const store = useSummaryStore();
const { summaries } = storeToRefs(store)
const { fetchTasksSummary } = store

onMounted(async () => {
    await fetchTasksSummary()
})
</script>