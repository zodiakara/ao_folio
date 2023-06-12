import { Box, Grid, Typography } from "@mui/material";
import { stack } from "../../assets/icons/myStack.js";
import Circle from "./Circle.jsx";

function About() {
  return (
    <Box
      className="MainContainer"
      id="about"
      sx={{ marginX: { xs: "2rem", md: "3rem", lg: "4rem" } }}
    >
      <Grid container rowSpacing={{ md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h3">
              {" "}
              about{" "}
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Hi! I'm Agata. I’ve recently finished Epicode bootcamp and I
              proudly call myself a full-stack developer. My studies major was
              architecture and I’ve been working as an architect for 4 years
              unitl I’ve decided to completely switch my career path. I’ve
              always liked building things, getting to the core of problems and
              solving it. I have strong analytical skills and I am friendly and
              cooperative. My architectural background turned out to be a huge
              help in coding, since I can easily organize my work, split
              complicated tasks into small bites and I know how to meet a
              deadline.<br></br> I am really fascinated by coding, AI and how
              that’s gonna influence programming and our lives and I want to be
              on the tech side of the fence. Click the button below to see my
              tech stack and if You want to get in touch, I am always one
              message away.
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
            <Typography
              variant="h3"
              sx={{ px: 1, textAlign: "center", marginY: "0.75rem" }}
            >
              skills
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
