import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [showCv, setShowCv] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return <GlobalContext.Provider value={{ showCv, setShowCv, showForm, setShowForm }}>{props.children}</GlobalContext.Provider>;
};
