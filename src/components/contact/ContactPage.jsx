import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <>
      <Box className="MainContainer">
        <Typography variant="h3">liked my page? wanna collaborate?</Typography>
        <Typography variant="body2">feel free to contact me!</Typography>
        {/* <Box>
          <ContactForm />
        </Box> */}
      </Box>
    </>
  );
}

export default ContactPage;
