import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <Box className="MainContainer" id={t("navbar-contact")}>
        <Typography gutterBottom variant="h3">
          contact
        </Typography>
        <Typography sx={{ maxWidth: "500px", textAlign: "center" }}>
          have a question or want to work together? fell free to write to me
          directly on{" "}
          <span style={{ color: "#fa8e7f" }}>agata.orminska@gmail.com</span> or
          use the contact form below
        </Typography>

        <ContactForm />
      </Box>
    </>
  );
}

export default ContactPage;
