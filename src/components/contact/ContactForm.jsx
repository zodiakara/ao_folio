import { Box, Button, Stack, TextField } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_KEY);
  const { t } = useTranslation();

  if (state.succeeded) {
    return <p>Thank You for Your message!</p>;
  }

  return (
    <>
      <Box sx={{ alignItems: "center", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <Stack
            direction={"column"}
            sx={{ minWidth: { sm: "350px", md: "500px" } }}
          >
            <TextField
              fullWidth
              id="name"
              name="name"
              label={t("contactpage-form.form-name")}
              required
              variant="standard"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <TextField
              id="email"
              name="email"
              label="email"
              type="email"
              fullWidth
              required
              variant="standard"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <TextField
              sx={{ marginTop: "2.5rem" }}
              id="message"
              name="message"
              placeholder={t("contactpage-form.form-message")}
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
            <Button
              type="submit"
              disabled={state.submitting}
              variant="contained"
              sx={{
                backgroundColor: "#fa8e7f",
                marginY: "1rem",
                "&:hover": { backgroundColor: "#fd6651" },
              }}
            >
              {t("contactpage-form.form-send")}
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default ContactForm;
