import { useTranslation } from "react-i18next";
import i18n, { changeLanguage } from "i18next";
import { Button } from "@mui/material";
import { useState } from "react";

const TranslateButton = () => {
  console.log(i18n.languages);
  console.log(i18n);

  const { t } = useTranslation();

  const handleLanguageChange = () => {
    const currentLanguage = i18n.language;
    if (currentLanguage === "pl") {
      i18n.changeLanguage("en");
    } else {
      changeLanguage("pl");
    }
  };

  return (
    <Button
      onClick={() => {
        handleLanguageChange();
      }}
    >
      {t("navbar-language")}
    </Button>
  );
};

export default TranslateButton;
