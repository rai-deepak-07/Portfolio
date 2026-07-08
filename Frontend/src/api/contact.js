import api from "../services/axios";

export const sendContact = (data) => api.post("/contact/", data);