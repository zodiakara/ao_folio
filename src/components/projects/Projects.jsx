import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Projects = () => {
  return (
    <Box className="MainContainer">
      <Typography variant="h2">My Projects</Typography>
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
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
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
      <Box>
        <Typography>check out my other projects </Typography>
      </Box>
    </Box>
  );
};

export default Projects;
