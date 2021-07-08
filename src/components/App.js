import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Header title="React.Context Test">
        <p>_____________________________________________</p>
      </Header>
      <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
};

export default App;
