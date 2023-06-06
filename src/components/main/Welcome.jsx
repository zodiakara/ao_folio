import { Box, Typography } from "@mui/material";
import ButtonPink from "../general/ButtonPink";

function WelcomePage() {
  return (
    <Box className="MainContainer">
      <Typography> Hello, I am </Typography>
      <Typography sx={{ marginY: "0.75rem" }} variant="h3">
        {" "}
        Agata Ormińska{" "}
      </Typography>
      <Typography>a full stack developer</Typography>
      <a href="/ao_cv.pdf">
        {" "}
        <ButtonPink text="download CV" />
      </a>
    </Box>
  );
}

export default WelcomePage;
