import { useCallback } from "react";

import { usePortfolio } from "../context/PortfolioContext";

import { PORTFOLIO_ACTIONS } from "../context/portfolioActions";

import useBootstrap from "../hooks/useBootstrap";

import LoadingPage from "../pages/Loading/LoadingPage";

import MaintenancePage from "../pages/Maintenance/MaintenancePage";

import ServerDownPage from "../pages/ServerDown/ServerDownPage";

export default function BootstrapProvider({ children }) {
  const { state, dispatch } = usePortfolio();

  const handleBootstrap = useCallback(
    (result) => {
      switch (result.status) {
        case "server-down":
          dispatch({
            type: PORTFOLIO_ACTIONS.SET_SERVER_DOWN,
            payload: true,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_LOADING,
            payload: false,
          });

          return;

        case "maintenance":
          dispatch({
            type: PORTFOLIO_ACTIONS.SET_MAINTENANCE,
            payload: result.maintenance,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_LOADING,
            payload: false,
          });

          return;

        case "ready":
          dispatch({
            type: PORTFOLIO_ACTIONS.SET_ABOUT,
            payload: result.data.about,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_SERVICES,
            payload: result.data.services,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_PROJECTS,
            payload: result.data.projects,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_RESUME,
            payload: result.data.resume,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_SKILLS,
            payload: result.data.skills,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_STATISTICS,
            payload: result.data.statistics,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_CERTIFICATES,
            payload: result.data.certificates,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_READY,
            payload: true,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_LOADING,
            payload: false,
          });

          return;

        default:
          dispatch({
            type: PORTFOLIO_ACTIONS.SET_SERVER_DOWN,
            payload: true,
          });

          dispatch({
            type: PORTFOLIO_ACTIONS.SET_LOADING,
            payload: false,
          });
      }
    },
    [dispatch]
  );

  useBootstrap(handleBootstrap);

  if (state.loading) {
    return <LoadingPage />;
  }

  if (state.serverDown) {
    return <ServerDownPage />;
  }

  if (state.maintenance) {
    return <MaintenancePage />;
  }

  return children;
}