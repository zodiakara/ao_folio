import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProjectsCard = (props) => {
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 345,
          border: "none",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          height="250"
          src="https://media.cnn.com/api/v1/images/stellar/prod/201026153717-cancun-mexico.jpg?q=x_2,y_215,h_1228,w_2182,c_crop/h_720,w_1280/f_webp"
          alt={props.project.name}
        />
        <CardContent>
          <Typography variant="h5">{props.project.name}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">see</Button>
          <Button size="small">repo</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProjectsCard;
