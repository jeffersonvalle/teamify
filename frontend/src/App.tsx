import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { InitialSetupProvider, useInitialSetup } from "./InitialSetupContext";
import LoginPage from "./pages/LoginPage";
import OrganizationSetupPage from "./pages/OrganizationSetupPage";

function AppRoutes() {
  const { needsInitialSetup } = useInitialSetup();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/organization-setup" element={needsInitialSetup ? <OrganizationSetupPage /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default function App() {
  return (
    <InitialSetupProvider>
      <Router>
        <AppRoutes />
      </Router>
    </InitialSetupProvider>
  );
} 