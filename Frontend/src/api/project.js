import api from "../services/axios";

// Get all active projects
export const getProjects = (params = {}) =>
  api.get("/projects/", { params });

// Get featured projects
export const getFeaturedProjects = () =>
  api.get("/projects/", {
    params: {
      featured: true,
    },
  });

// Get projects shown on landing page
export const getHomeProjects = () =>
  api.get("/projects/", {
    params: {
      show_on_home: true,
    },
  });


// api/project.js

export const getProjectDetails = async (slug) => {
  const response = await api.get(`/projects/${slug}/`);
  return response.data;
};