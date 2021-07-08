import LanguageContext from "../contexts/LanguageContext";

const LanguageSelector = () => {
  return (
    <LanguageContext.Consumer>
      {({ language, onLanguageChange }) => (
        <div>
          Select a language:
          <i className="flag us" onClick={() => onLanguageChange("english")} />
          <i className="flag it" onClick={() => onLanguageChange("italian")} />
        </div>
      )}
    </LanguageContext.Consumer>
  );
};

export default LanguageSelector;
