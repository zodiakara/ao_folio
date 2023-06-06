import { Box, Card, CardMedia, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ProjectButton from "./ProjectButton";
import "./projects.css";

const ProjectsCard = (props) => {
  return (
    <Box>
      <Card
        className="projectCardContainer"
        sx={{
          border: "none",
          boxShadow: "none",
          margin: "1rem",
        }}
      >
        <CardMedia
          className="projectCard"
          component="img"
          height="100%"
          width="100%"
          src={props.project.image}
          alt={props.project.name}
          sx={{
            border: "solid 0.1px lightgrey",
            borderRadius: "10px",
            "&:hover": { cursor: "pointer", opacity: "80%" },
          }}
        />
        <Box className="button-wrapper">
          {props.project.prodFE === "" ? (
            ""
          ) : (
            <ProjectButton
              icon={<VisibilityIcon />}
              address={
                props.project.prodFE === ""
                  ? props.project.repoFE
                  : props.project.prodFE
              }
            />
          )}
          <ProjectButton
            icon={<GitHubIcon />}
            address={props.project.repoFE ? props.project.repoFE : ""}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginTop: "0.5rem" }}
          p={0}
        >
          {props.project.name}
        </Typography>
      </Card>
    </Box>
  );
};

export default ProjectsCard;
