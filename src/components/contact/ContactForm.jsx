import { Box, Button, Stack, TextField } from "@mui/material";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Box component="form" onSubmit={(e) => handleSubmit(e)}>
        <Stack direction={"column"} sx={{ minWidth: "350px" }}>
          <TextField id="form-name" label="name" variant="standard" />
          <TextField id="form-email" label="email" variant="standard" />
          <TextField
            sx={{ marginTop: "2rem" }}
            id="form-text"
            multiline
            rows={5}
          />
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleSubmit}>Send</Button>
        </Box>
      </Box>
    </>
  );
}

export default ContactForm;
