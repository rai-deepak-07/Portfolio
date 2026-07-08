import api from "../services/axios";

export const getTechnologies = () => api.get("/technologies/");