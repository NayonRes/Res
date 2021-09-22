import React, { useState } from "react";
import LocalizedStrings from "react-localization";
import data from "./localization/data";
console.log("data", data);
const ReactLocalization = () => {
  const [lang, setLang] = useState("en");
  let translations = new LocalizedStrings(data);
  //  ============ for setting language===============
  const languageHandler = (e) => {
    let lang = e.target.value;
    setLang(lang);
  };
  translations.setLanguage(lang);

  //   =====================================
  return (
    <div>
      package : <b>https://www.npmjs.com/package/react-localization</b><br/>
      simplest-implementation-of-localization link : 
       <b>https://www.ui-dev.in/2021/02/simplest-implementation-of-localization.html</b>
      <h4>This is React Localization page</h4>
      <span>Change Language: </span>
      <select onChange={languageHandler}>
        <option value="en">En- English</option>
        <option value="fr">Fr- Italian</option>
        <option value="de">De- German</option>
        <option value="it">It- Italian</option>
        <option value="ru">Ru- Russian</option>
      </select>
      <br />
      <br />
      <div>
        <div>
          {translations.name} <input type="text" />
        </div>
        <div>
          {translations.age} <input type="text" />
        </div>
        <div>
          {translations.address} <input type="text" />
        </div>
        <div>
          {translations.contactNo} <input type="text" />
        </div>
      
      </div>
      <br />
      <br />
      <div>
        <h4>This is for using placeholder </h4>
        <div>
          {" "}
          INFO:{" "}
          {translations.formatString(
            translations.info,
            "UK",
            "London",
            "Glasgow"
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default ReactLocalization;
