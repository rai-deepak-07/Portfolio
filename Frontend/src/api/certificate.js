import api from "../services/axios";

export const getCertificates = () => api.get("/certificates/");