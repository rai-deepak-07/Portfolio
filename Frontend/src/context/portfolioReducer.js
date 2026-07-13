import { PORTFOLIO_ACTIONS } from "./portfolioActions";

export const initialState = {
  // App State
  loading: true,
  ready: false,
  serverDown: false,
  maintenance: null,

  // Portfolio Data
  configuration: null,
  statistics: [],
  services: [],
  technologies: [],
  faqs: [],

  homeProjects: [],
  featuredProjects: [],


  about: null,
  skills: [],
};

export function portfolioReducer(state, action) {
  switch (action.type) {
    case PORTFOLIO_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_READY:
      return {
        ...state,
        ready: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_SERVER_DOWN:
      return {
        ...state,
        serverDown: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_MAINTENANCE:
      return {
        ...state,
        maintenance: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_CONFIGURATION:
      return {
        ...state,
        configuration: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_STATISTICS:
      return {
        ...state,
        statistics: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_HOME_PROJECTS:
      return {
        ...state,
        homeProjects: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_FEATURED_PROJECTS:
      return {
        ...state,
        featuredProjects: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_TECHNOLOGIES:
      return {
        ...state,
        technologies: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_FAQS:
      return {
        ...state,
        faqs: action.payload,
      };


    case PORTFOLIO_ACTIONS.SET_ABOUT:
      return {
        ...state,
        about: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_SKILLS:
      return {
        ...state,
        skills: action.payload,
      };


    case PORTFOLIO_ACTIONS.RESET:
      return initialState;

    default:
      return state;
  }
}