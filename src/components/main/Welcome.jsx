import { Box, Button, Typography } from "@mui/material";

function WelcomePage() {
  return (
    <Box
      className="MainContainer"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography> Hello, I am </Typography>
      <Typography variant="h3"> Agata Ormińska </Typography>
      <Typography>a full stack developer</Typography>
    </Box>
  );
}

export default WelcomePage;
