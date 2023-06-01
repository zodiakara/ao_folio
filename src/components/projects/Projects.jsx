import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Link, Typography } from "@mui/material";
import { myProjects } from "../../assets/myProjects";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <Box className="MainContainer">
      <Typography gutterBottom variant="h3">
        projects
      </Typography>

      {myProjects.map((project) => {
        return <ProjectsCard project={project} />;
      })}

      <Box sx={{ display: "flex", "justify-content": "center", marginY: 2 }}>
        <GitHubIcon />

        <Typography className="projects-gh" sx={{ mx: 1, fontFamily: "Lato" }}>
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
