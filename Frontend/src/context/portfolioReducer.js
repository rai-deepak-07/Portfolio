import { PORTFOLIO_ACTIONS } from "./portfolioActions";

export const initialState = {
  // App State
  loading: true,
  ready: false,
  serverDown: false,
  maintenance: null,

  // Portfolio Data
  about: null,
  services: [],
  projects: [],
  skills: [],
  statistics: [],
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

    case PORTFOLIO_ACTIONS.SET_ABOUT:
      return {
        ...state,
        about: action.payload,
      };

    case PORTFOLIO_ACTIONS.SET_SERVICES:
      return {
        ...state,
        services: action.payload,
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

    case PORTFOLIO_ACTIONS.SET_STATISTICS:
      return {
        ...state,
        statistics: action.payload,
      };

    case PORTFOLIO_ACTIONS.RESET:
      return initialState;

    default:
      return state;
  }
}