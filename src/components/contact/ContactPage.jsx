import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <>
      <Box className="MainContainer" id="contact">
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
