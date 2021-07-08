import LanguageContext from "../contexts/LanguageContext";

const renderLabel = (language) => (language === "english" ? "Name" : "Nome");

const Field = () => {
  return (
    <div className="ui field">
      <label>
        <LanguageContext.Consumer>
          {({ language }) => renderLabel(language)}
        </LanguageContext.Consumer>
      </label>
      <input />
    </div>
  );
};

export default Field;
