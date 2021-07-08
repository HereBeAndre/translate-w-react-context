import { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

const App = () => {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => setLanguage(language);
  return (
    <div className="ui container">
      <LanguageSelector onLanguageChange={onLanguageChange} />
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
