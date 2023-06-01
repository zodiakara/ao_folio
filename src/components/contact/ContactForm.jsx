import { Box, Stack, TextField } from "@mui/material";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Box component="form" onSubmit={(e) => handleSubmit(e)}>
        <Stack direction={"column"} sx={{ minWidth: "300px" }}>
          <TextField id="form-name" label="name" variant="standard" />
          <TextField id="form-email" label="email" variant="standard" />
          <TextField
            sx={{ marginTop: "2rem" }}
            id="form-text"
            multiline
            rows={5}
          />
        </Stack>
      </Box>
    </>
  );
}

export default ContactForm;
