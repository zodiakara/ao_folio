import { Box, Grid, Typography } from "@mui/material";
import { stack } from "../../assets/icons/myStack.js";
import Circle from "./Circle.jsx";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <Box
      className="MainContainer"
      id={t("navbar-about")}
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
              {t("aboutpage-title")}
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              {t("aboutpage-description.part-one")}
              <br></br> {t("aboutpage-description.part-two")}
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
              {t("aboutpage-skills")}
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
