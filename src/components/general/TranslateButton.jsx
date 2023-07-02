import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Button } from "@mui/material";

const TranslateButton = () => {
  function LanguageSwitcher() {
    const { t } = useTranslation();

    const handleLanguageChange = (language) => {
      i18n.changeLanguage(language);
    };
  }
  return <Button onClick={() => {}}>EN</Button>;
};

export default TranslateButton;
