import { createContext, useContext, useReducer } from "react";

import { initialState, portfolioReducer, } from "./portfolioReducer";

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [state, dispatch] = useReducer( portfolioReducer, initialState);

  return (
    <PortfolioContext.Provider value={{ state, dispatch, }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error(
      "usePortfolio must be used within PortfolioProvider"
    );
  }

  return context;
}