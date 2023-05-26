import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box className="MainContainer">
      <h1>about me</h1>
      <Box>
        <Typography>
          I am really passionate about coding, so I might as well get payed to
          do so.{" "}
        </Typography>
      </Box>
      <Box>
        <h2>Skills</h2>
      </Box>
    </Box>
  );
}

export default About;
