import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Drawer, Link, Typography } from "@mui/material";

function DrawerSidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  const list = () => (
    <Box sx={{}} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <Box>
        <Typography variant="h3">
          Agata <br></br>Ormińska
        </Typography>
        <Divider />
        <List>
          <ListItem>About</ListItem>
          <ListItem>Projects</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Box>
      <Box>
        <Link href="">Github</Link>

        <Link href="">Linkedin</Link>
      </Box>
    </Box>
  );

  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            variant="permanent"
            anchor="left"
            open={state[anchor]}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default DrawerSidebar;
