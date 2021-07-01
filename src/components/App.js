import { useState } from "react";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => setLanguage(language);

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => onLanguageChange("english")} />
        <i className="flag it" onClick={() => onLanguageChange("italian")} />
      </div>
      <UserCreate />
    </div>
  );
};

export default App;
