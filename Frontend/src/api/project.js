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

// Get projects by category slug
export const getProjectsByCategory = (categorySlug) =>
  api.get("/projects/", {
    params: {
      category: categorySlug,
    },
  });

// Get projects by status
export const getProjectsByStatus = (status) =>
  api.get("/projects/", {
    params: {
      status,
    },
  });

// Search projects
export const searchProjects = (search) =>
  api.get("/projects/", {
    params: {
      search,
    },
  });

// Get single project by slug
export const getProjectDetails = (slug) =>
  api.get(`/projects/${slug}/`);

/**
 * ============================================================
 * Combined Helper
 * ============================================================
 */

export const filterProjects = ({
  featured,
  show_on_home,
  category,
  status,
  search,
} = {}) =>
  api.get("/projects/", {
    params: {
      featured,
      show_on_home,
      category,
      status,
      search,
    },
  });




/*
//Examples
//Get all projects
const { data } = await getProjects();

//Featured projects
const { data } = await getFeaturedProjects();

//Home page projects
const { data } = await getHomeProjects();

//Search
const { data } = await searchProjects("smart");

//Category
const { data } = await getProjectsByCategory("web-application");

//Status
const { data } = await getProjectsByStatus("LIVE");

//Single project
const { data } = await getProjectDetails("smartdine");

//Combined filtering
const { data } = await filterProjects({
  category: "ai",
  status: "LIVE",
  search: "face",
});
*/