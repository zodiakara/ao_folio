import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: name, email: email, text: text };
    console.log(data);
    clearTheForm();
  };
  const clearTheForm = () => {
    setName("");
    setEmail("");
    setText("");
  };
  return (
    <>
      <Box component="form" onSubmit={(e) => handleSubmit(e)}>
        <Stack direction={"column"} sx={{ minWidth: "350px" }}>
          <TextField
            id="form-name"
            label="name"
            value={name ? name : ""}
            onChange={(e) => {
              setName(e.target.value);
            }}
            variant="standard"
          />
          <TextField
            id="form-email"
            label="email"
            value={email ? email : ""}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            variant="standard"
          />
          <TextField
            sx={{ marginTop: "2rem" }}
            id="form-text"
            value={text ? text : ""}
            onChange={(e) => {
              setText(e.target.value);
            }}
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
