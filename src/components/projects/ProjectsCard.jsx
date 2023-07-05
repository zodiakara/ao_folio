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
          border: "solid 0.1px lightgrey",
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
            // border: "solid 0.1px lightgrey",
            // borderRadius: "10px",
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
        <Box sx={{ paddingX: "1rem", paddingY: "0.5rem" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginTop: "0.25rem" }}
            p={0}
          >
            {props.project.name}
          </Typography>
          <Box sx={{ height: "5rem", marginBottom: "1rem" }}>
            {/* <Typography variant="body1">
              {props.project.stackFE}, {props.project.stackBE}
            </Typography> */}
            <Typography>
              {props.project.description ? props.project.description : ""}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ProjectsCard;
