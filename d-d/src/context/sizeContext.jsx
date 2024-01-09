import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [tamanoPantalla, setTamanoPantalla] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTamanoPantalla(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contextValue = useMemo(() => ({
    tamanoPantalla,
  }), [tamanoPantalla]);

  return (
    <Context.Provider value={contextValue}>{children}</Context.Provider>
  );
};

export const useSize = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
