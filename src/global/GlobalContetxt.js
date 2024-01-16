import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [showCv, setShowCv] = useState(false);

  return <GlobalContext.Provider value={{ showCv, setShowCv }}>{props.children}</GlobalContext.Provider>;
};
