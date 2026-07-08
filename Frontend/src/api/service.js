import api from "../services/axios";

export const getServices = () => api.get("/services/");