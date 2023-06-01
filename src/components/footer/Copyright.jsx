import { Box, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "baseline" }}>
      <Typography variant="h5" sx={{ fontFamily: "Lato" }}>
        {"©"} agata orminska {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Copyright;
