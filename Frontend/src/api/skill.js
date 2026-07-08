import api from "../services/axios";

export const getSkills = () => api.get("/skills/");