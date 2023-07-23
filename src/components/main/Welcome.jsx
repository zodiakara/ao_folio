import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function WelcomePage() {
  const { t } = useTranslation();
  return (
    <Box className="MainContainer" id={t("navbar-home")}>
      <Typography>{t("welcomepage-hello")}</Typography>
      <Typography sx={{ marginY: "0.75rem" }} variant="h3">
        {" "}
        Agata Ormińska{" "}
      </Typography>
      <Typography>{t("welcomepage-title")}</Typography>
    </Box>
  );
}

export default WelcomePage;
