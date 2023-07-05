import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();
  const hideText = () => {};
  return (
    <>
      <Box className="MainContainer" id={t("navbar-contact")}>
        <Typography gutterBottom variant="h3">
          {t("contactpage-title")}
        </Typography>
        <Typography sx={{ maxWidth: "500px", textAlign: "center" }}>
          {t("contactpage-subheader.part-one")}
          <span style={{ color: "#fa8e7f" }}>agata.orminska@gmail.com</span>
          {t("contactpage-subheader.part-two")}
        </Typography>

        <ContactForm hideText={hideText} />
      </Box>
    </>
  );
}

export default ContactPage;
