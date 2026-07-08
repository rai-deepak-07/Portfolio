import api from "../services/axios";

export const getAbout = () => api.get("/about/");