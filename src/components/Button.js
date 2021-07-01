import LanguageContext from "../contexts/LanguageContext";

const renderSubmit = (language) =>
  language === "english" ? "Submit" : "Salva";

const renderButton = (color) => {
  return (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {({ language }) => renderSubmit(language)}
      </LanguageContext.Consumer>
    </button>
  );
};

const Button = () => {
  return <button className="ui button primary">Submit</button>;
};

export default Button;
