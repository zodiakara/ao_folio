import { Box, Typography } from "@mui/material";
import Button from "../general/Button";

function WelcomePage() {
  return (
    <Box className="MainContainer">
      <Typography> Hello, I am </Typography>
      <Typography sx={{ marginY: "0.75rem" }} variant="h3">
        {" "}
        Agata Ormińska{" "}
      </Typography>
      <Typography>a full stack developer</Typography>
      <Button text="downloadCV" />
    </Box>
  );
}

export default WelcomePage;
