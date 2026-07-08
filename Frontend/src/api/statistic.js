import api from "../services/axios";

export const getStatistics = () => api.get("/statistics/");