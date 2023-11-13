import React, { useEffect } from "react";

export default function LanguagePicker() {

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "eng",
        includedLanguages: "uz,en,ru"
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );

    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);



  return (
    <div>
      <div id="google_translate_element" className="border"></div>
    </div>
  );
}
