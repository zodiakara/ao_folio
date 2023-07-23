import { useTranslation } from "react-i18next";
import i18n, { changeLanguage } from "i18next";
import pl from "../../assets/icons-language/pl.png";
import en from "../../assets/icons-language/gb.png";
import { IconButton } from "@mui/material";

const TranslateButton = () => {
  console.log(i18n.languages);
  console.log(i18n);

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
    <IconButton
      sx={{ height: "35px", width: "35px", p: "0.5rem", m: "0.5rem" }}
      onClick={() => {
        handleLanguageChange();
      }}
    >
      <img
        className="language-img"
        src={i18n.language === "en" ? pl : en}
        alt="current-language"
      />
    </IconButton>
  );
};

export default TranslateButton;
