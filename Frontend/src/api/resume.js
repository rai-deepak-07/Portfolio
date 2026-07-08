import api from "../services/axios";

export const getResume = () => api.get("/resume/");