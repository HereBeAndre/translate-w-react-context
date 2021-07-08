import React, { useState } from "react";

const Context = React.createContext("english");

export const LanguageStore = ({ children }) => {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => setLanguage(language);

  return (
    <Context.Provider value={{ language, onLanguageChange }}>
      {/* Children allows to render JSX inside LanguageStore component */}
      {children}
    </Context.Provider>
  );
};

export default Context;
