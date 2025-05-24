import React, { createContext, useState, useContext } from "react";

export const InitialSetupContext = createContext({
  needsInitialSetup: false,
  setNeedsInitialSetup: (v: boolean) => {},
  organizationId: null as number | null,
  setOrganizationId: (id: number | null) => {},
});

export const InitialSetupProvider = ({ children }: { children: React.ReactNode }) => {
  const [needsInitialSetup, setNeedsInitialSetup] = useState(false);
  const [organizationId, setOrganizationId] = useState<number | null>(null);
  return (
    <InitialSetupContext.Provider value={{ needsInitialSetup, setNeedsInitialSetup, organizationId, setOrganizationId }}>
      {children}
    </InitialSetupContext.Provider>
  );
};

export const useInitialSetup = () => useContext(InitialSetupContext); 