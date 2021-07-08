const LanguageSelector = ({ onLanguageChange }) => {
  return (
    <div>
      Select a language:
      <i className="flag us" onClick={() => onLanguageChange("english")} />
      <i className="flag it" onClick={() => onLanguageChange("italian")} />
    </div>
  );
};

export default LanguageSelector;
