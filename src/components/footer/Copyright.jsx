import { Box, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "baseline" }}>
      <Typography>
        agata orminska{" "}
        <span style={{ color: "#fa8e7f" }}>©{new Date().getFullYear()}</span>
      </Typography>
    </Box>
  );
};

export default Copyright;
