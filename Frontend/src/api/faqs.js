import api from "../services/axios";

export const getFAQs = () => api.get("/faqs/");