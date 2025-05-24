import React, { createContext, useState, useContext } from "react";

export const InitialSetupContext = createContext({
  needsInitialSetup: false,
  setNeedsInitialSetup: (v: boolean) => {},
});

export const InitialSetupProvider = ({ children }: { children: React.ReactNode }) => {
  const [needsInitialSetup, setNeedsInitialSetup] = useState(false);
  return (
    <InitialSetupContext.Provider value={{ needsInitialSetup, setNeedsInitialSetup }}>
      {children}
    </InitialSetupContext.Provider>
  );
};

export const useInitialSetup = () => useContext(InitialSetupContext); 