import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { InitialSetupProvider, useInitialSetup } from "./InitialSetupContext";
import LoginPage from "./pages/LoginPage";
import OrganizationSetupPage from "./pages/OrganizationSetupPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import ProtectedRoute from "./components/ProtectedRoute";

function AppRoutes() {
  const { needsInitialSetup } = useInitialSetup();
  const hasSession = typeof window !== "undefined" && !!localStorage.getItem("session");
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/organization-setup" element={needsInitialSetup ? <ProtectedRoute><OrganizationSetupPage /></ProtectedRoute> : <Navigate to="/login" />} />
      <Route path="/coming-soon" element={<ProtectedRoute><ComingSoonPage /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to={hasSession ? "/coming-soon" : "/login"} />} />
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