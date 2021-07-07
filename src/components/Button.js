import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const renderSubmit = (language) =>
  language === "english" ? "Submit" : "Salva";

const Button = () => {
  return (
    <ColorContext.Consumer>
      {(color) => (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {(language) => renderSubmit(language)}
          </LanguageContext.Consumer>
        </button>
      )}
    </ColorContext.Consumer>
  );
};

export default Button;
