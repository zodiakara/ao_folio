import { useTranslation } from "react-i18next";
import i18n, { changeLanguage } from "i18next";
import { Button } from "@mui/material";

const TranslateButton = () => {
  console.log(i18n.languages);
  console.log(i18n);

  const { t } = useTranslation();

  const handleLanguageChange = () => {
    const currentLanguage = i18n.language;
    if (currentLanguage === "pl") {
      i18n.changeLanguage("en").then(() => {
        window.location.reload();
      });
    } else {
      changeLanguage("pl").then(() => {
        window.location.reload();
      });
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
