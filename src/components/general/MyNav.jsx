import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ButtonPink from "./ButtonPink";
import classes from "./MyNav.module.css";
import { Link } from "@mui/material";
import cv from "../../assets/ao_cv.pdf";
import { useTranslation } from "react-i18next";
import TranslateButton from "./TranslateButton";

const MyNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { t } = useTranslation();
  const pages = [
    t("navbar-home"),
    t("navbar-about"),
    t("navbar-projects"),
    t("navbar-contact"),
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className={classes.navbar}
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "0.1px black solid",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ paddingX: { xs: "1rem", lg: "2.5rem" } }}>
          <Link href={"#" + t("navbar-home")}>
            {" "}
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Lato",
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
              }}
            >
              AO
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              className={classes.smallToolbar}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              color="black"
            >
              {pages.map((page) => (
                <MenuItem key={page.indexOf()} onClick={handleCloseNavMenu}>
                  <Link href={`${"#" + page}`}>
                    {" "}
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                disableFocusRipple
                disableRipple
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 5,
                  color: "black",
                  display: "block",
                  backgroundColor: "transparent",
                  "&:hover": { backgroundColor: "transparent" },
                }}
                href={`${"#" + page}`}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TranslateButton />
            <a href={cv}>
              {" "}
              <ButtonPink text={t("navbar-cv-download")} />
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MyNavbar;
