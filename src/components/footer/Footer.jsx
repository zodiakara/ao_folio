import { Box, Container } from "@mui/material";
import FooterButton from "./FooterButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Container
      maxWidth
      className="footer"
      sx={{
        borderTop: "0.1px solid black",
        bottom: 0,
        py: 2,
        px: 1,
        mt: "auto",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <FooterButton
            icon={<GitHubIcon />}
            address="https://github.com/zodiakara"
          />
          <FooterButton
            icon={<LinkedInIcon />}
            address={
              "https://www.linkedin.com/in/agata-ormi%C5%84ska-b79271174/"
            }
          />
          <FooterButton
            icon={<InstagramIcon />}
            address="https://www.instagram.com/agejsha/"
          />
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;
