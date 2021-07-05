import LanguageContext from "../contexts/LanguageContext";

const renderSubmit = (language) =>
  language === "english" ? "Submit" : "Salva";

const Button = () => {
  return (
    <button className={`ui button primary`}>
      <LanguageContext.Consumer>
        {(language) => renderSubmit(language)}
      </LanguageContext.Consumer>
    </button>
  );
};

export default Button;
