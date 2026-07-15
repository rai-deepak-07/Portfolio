import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../layouts/BlankLayout";

import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import MaintenancePage from "../pages/Maintenance/MaintenancePage";
import ServerDownPage from "../pages/ServerDown/ServerDownPage";
import ProjectsPage from "../pages/Project/ProjectsPage";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/projects" element={<ProjectsPage />}/>

        </Route>

        <Route element={<BlankLayout />}>

          <Route
            path="/maintenance"
            element={<MaintenancePage />}
          />

          <Route
            path="/server-down"
            element={<ServerDownPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}