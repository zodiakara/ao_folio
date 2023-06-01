import { Box, TextField } from "@mui/material";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Box component="form" onSubmit={(e) => handleSubmit(e)}>
        <TextField id="form-name" label="name" variant="standard" />
        <TextField id="form-email" label="email" variant="standard" />
        <TextField id="form-text" multiline rows={5} />
      </Box>
    </>
  );
}

export default ContactForm;
