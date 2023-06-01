import { Box, Grid, Typography } from "@mui/material";
import { stack } from "../../assets/icons/myStack.js";
import Circle from "./Circle.jsx";

function About() {
  return (
    <Box className="MainContainer">
      <Grid container rowSpacing={{ md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3"> about </Typography>
            <Typography>
              I am really passionate about coding, so I might as well get payed
              to do so.{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Circle />
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" sx={{ px: 1, textAlign: "center" }}>
              Skills
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginX: "0.75rem",
              }}
            >
              {stack.map((icon) => (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: 1.5,
                      my: 0.75,
                      "&:hover": { scale: "1.1" },
                    }}
                  >
                    <Box className="skill-item">
                      <img src={icon.icon} alt={icon.name} />
                    </Box>
                    <Typography sx={{ px: 1 }}>{icon.name}</Typography>
                  </Box>
                </>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
