import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import { PortfolioProvider } from "../context/PortfolioContext";
import BootstrapProvider from "./BootstrapProvider";


export default function AppProvider({ children }) {

    return (

        <HelmetProvider>

                <PortfolioProvider>

                    <BootstrapProvider>
                        {children}

                        <Toaster position="top-right" />
                    </BootstrapProvider>

                </PortfolioProvider>

        </HelmetProvider>

    );

}