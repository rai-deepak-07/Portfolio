import api from "../services/axios";

export const getMaintenance = () => api.get("/maintenance/");