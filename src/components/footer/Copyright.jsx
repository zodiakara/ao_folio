import { Box, Link, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "baseline" }}>
      <Typography variant="h3">
        <Link
          href="https://www.linkedin.com/in/agata-ormi%C5%84ska-b79271174/"
          color="inherit"
        >
          {"©"} agata orminska
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Copyright;
