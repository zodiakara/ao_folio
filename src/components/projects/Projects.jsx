import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Grid, Link, Typography } from "@mui/material";
import { myProjects } from "../../assets/myProjects";
import ProjectsCard from "./ProjectsCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Box
      className="MainContainer"
      id={t("navbar-projects")}
      sx={{ marginX: { xs: "1rem", md: "2.5rem", lg: "3rem" } }}
    >
      <Typography gutterBottom variant="h3">
        projects
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {myProjects.map((project) => {
          return (
            <Grid item xs={12} md={6}>
              <ProjectsCard project={project} />
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ display: "flex", "justify-content": "center", marginY: 2 }}>
        <GitHubIcon />

        <Typography className="projects-gh" sx={{ mx: 1 }}>
          <Link href="https://github.com/zodiakara" sx={{ color: "black" }}>
            check out my other works
          </Link>
        </Typography>

        <GitHubIcon />
      </Box>
    </Box>
  );
};

export default Projects;
