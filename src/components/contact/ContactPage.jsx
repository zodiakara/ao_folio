import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <>
      <Box className="MainContainer" id="contact">
        <Typography gutterBottom variant="h3">
          contact
        </Typography>
        <Typography>have a question or want to work together?</Typography>

        <Box>
          <ContactForm />
        </Box>
      </Box>
    </>
  );
}

export default ContactPage;
