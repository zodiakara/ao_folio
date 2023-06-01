import { Box, Card, CardMedia, Typography } from "@mui/material";

const ProjectsCard = (props) => {
  return (
    <Box>
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          width="auto"
          src="https://media.cnn.com/api/v1/images/stellar/prod/201026153717-cancun-mexico.jpg?q=x_2,y_215,h_1228,w_2182,c_crop/h_720,w_1280/f_webp"
          alt={props.project.name}
        />

        <Typography variant="h4" p={0}>
          {props.project.name}
        </Typography>
      </Card>
    </Box>
  );
};

export default ProjectsCard;
