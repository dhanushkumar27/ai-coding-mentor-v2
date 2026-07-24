import LANGUAGES from "../../constants/languages";

import "./index.css";

const LanguageSelector = ({ language, onChangeLanguage }) => {
    return (
        <div className="language-selector-container">

            <label
                htmlFor="language"
                className="language-label"
            >
                Language:
            </label>

            <select
                id="language"
                className="language-selector"
                value={language}
                onChange={(event) =>
                    onChangeLanguage(event.target.value)
                }
            >
                {LANGUAGES.map((eachLanguage) => (
                    <option
                        key={eachLanguage.value}
                        value={eachLanguage.value}
                    >
                        {eachLanguage.label}
                    </option>
                ))}
            </select>

        </div>
    );
};

export default LanguageSelector;