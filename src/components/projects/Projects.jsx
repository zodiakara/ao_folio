import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Icon,
  IconButton,
  SvgIcon,
  Typography,
} from "@mui/material";

const Projects = () => {
  return (
    <Box className="MainContainer">
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h2">My Projects</Typography>
      </Box>
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
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h5">title</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">see</Button>
            <Button size="small">repo</Button>
          </CardActions>
        </Card>
      </Box>
      <Box sx={{ display: "flex", "justify-content": "center", marginY: 2 }}>
        <GitHubIcon />

        <Typography sx={{ mx: 1, fontFamily: "Lato" }}>
          check out my other works
        </Typography>

        <GitHubIcon />
      </Box>
    </Box>
  );
};

export default Projects;
