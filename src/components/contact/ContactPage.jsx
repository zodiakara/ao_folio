import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <>
      <Box className="MainContainer">
        <Typography variant="h3">wanna collaborate?</Typography>
        <Typography variant="body2">
          feel free to contact me!
          {/* <br></br>You can use the contact form or write directly to my @ */}
        </Typography>

        {/* <Box>
          <ContactForm />
        </Box> */}
      </Box>
    </>
  );
}

export default ContactPage;
