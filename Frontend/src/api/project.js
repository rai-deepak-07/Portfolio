import api from "../services/axios";

export const getProjects = () => api.get("/projects/");