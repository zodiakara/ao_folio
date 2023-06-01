import { Box, Typography } from "@mui/material";

function WelcomePage() {
  return (
    <Box className="MainContainer">
      <Typography> Hello, I am </Typography>
      <Typography sx={{ marginY: "0.75rem" }} variant="h3">
        {" "}
        Agata Ormińska{" "}
      </Typography>
      <Typography>a full stack developer</Typography>
    </Box>
  );
}

export default WelcomePage;
