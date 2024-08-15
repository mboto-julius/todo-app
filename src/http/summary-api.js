import api from "./api"

const apiPath = import.meta.env.VITE_API_PATH
const resource = apiPath + "/summaries";

export const tasksSummary = () => api.get(resource)