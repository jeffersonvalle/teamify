import React, { createContext, useState, useContext } from "react";

function getInitialSession() {
  if (typeof window !== "undefined") {
    const session = localStorage.getItem("session");
    if (session) {
      try {
        const data = JSON.parse(session);
        return {
          needsInitialSetup: !data.organization?.name || !data.organization?.address,
          organizationId: data.organization?.id ?? null,
        };
      } catch {}
    }
  }
  return { needsInitialSetup: false, organizationId: null };
}

export const InitialSetupContext = createContext({
  needsInitialSetup: false,
  setNeedsInitialSetup: (v: boolean) => {},
  organizationId: null as number | null,
  setOrganizationId: (id: number | null) => {},
});

export const InitialSetupProvider = ({ children }: { children: React.ReactNode }) => {
  const initial = getInitialSession();
  const [needsInitialSetup, setNeedsInitialSetup] = useState(initial.needsInitialSetup);
  const [organizationId, setOrganizationId] = useState<number | null>(initial.organizationId);
  return (
    <InitialSetupContext.Provider value={{ needsInitialSetup, setNeedsInitialSetup, organizationId, setOrganizationId }}>
      {children}
    </InitialSetupContext.Provider>
  );
};

export const useInitialSetup = () => useContext(InitialSetupContext); 