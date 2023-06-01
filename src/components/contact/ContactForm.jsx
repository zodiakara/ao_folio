import { Box, Button, Stack, TextField } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_KEY);

  if (state.succeeded) {
    return <p>Thank You for Your message!</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack direction={"column"} sx={{ minWidth: "350px" }}>
          <TextField
            id="name"
            name="name"
            label="Name"
            fullWidth
            required
            variant="standard"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            required
            variant="standard"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <TextField
            sx={{ marginTop: "2rem" }}
            id="message"
            name="message"
            placeholder="type your message here"
            multiline
            rows={5}
            fullWidth
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="submit" disabled={state.submitting}>
            Send
          </Button>
        </Box>
      </form>
    </>
  );
}

export default ContactForm;
