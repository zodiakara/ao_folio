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
          src="https://media.cnn.com/api/v1/images/stellar/prod/201026153717-cancun-mexico.jpg?q=x_2,y_215,h_1228,w_2182,c_crop/h_720,w_1280/f_webp"
          alt={props.project.name}
          // sx={{ "&:hover": { cursor: "pointer", opacity: "80%" } }}
        />
        <Box className="button-wrapper">
          <ProjectButton
            icon={<VisibilityIcon />}
            address={props.project.prodFE ? props.project.prodFE : ""}
            sx={
              props.project.prodFE ? { display: "flex" } : { display: "none" }
            }
          />
          <ProjectButton icon={<GitHubIcon />} address={props.project.repoFE} />
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
