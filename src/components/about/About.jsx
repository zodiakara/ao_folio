import { Box, Typography } from "@mui/material";
import { stack } from "../../assets/icons/myStack.js";
import Circle from "./Circle.jsx";

function About() {
  return (
    <Box
      className="MainContainer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",

          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontFamily: "Lato" }}>
            {" "}
            about{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Lato" }}>
            I am really passionate about coding, so I might as well get payed to
            do so.{" "}
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Circle />
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Typography
          variant="h4"
          sx={{ px: 1, fontFamily: "Lato", textAlign: "center" }}
        >
          Skills
        </Typography>

        <Box>
          {stack.map((icon) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  m: 2,
                  "&:hover": { scale: "1.1" },
                }}
              >
                <Box className="skill-item">
                  <img src={icon.icon} alt={icon.name} />
                </Box>
                <Typography sx={{ px: 1, fontFamily: "Lato" }}>
                  {icon.name}
                </Typography>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default About;
