import { Box, Link, List, ListItem, Typography } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  return (
    <Box
      className="sidebarHeader"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h3">
          Agata <br></br>Ormińska
        </Typography>
        <List>
          <ListItem>About</ListItem>
          <ListItem>Projects</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Box>
      <Box>
        <Link href="https://github.com/zodiakara">Github</Link>

        <Link href="https://www.linkedin.com/in/agata-ormi%C5%84ska-b79271174/">
          Linkedin
        </Link>
      </Box>
    </Box>
  );
}

export default Sidebar;
