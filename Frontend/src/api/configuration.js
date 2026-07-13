import api from "../services/axios";

export const getConfiguration = () => api.get("/configuration/");