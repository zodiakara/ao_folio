import { IconButton, Link } from "@mui/material";

function ProjectButton({ address, icon }) {
  return (
    <Link href={address}>
      <IconButton
        size="large"
        sx={{
          color: ["#f5f5f5"],
          backgroundColor: "grey",
          marginX: "0.5rem",
          "&:hover": { scale: 1.1, backgroundColor: "darkgrey" },
        }}
      >
        {icon}
      </IconButton>
    </Link>
  );
}

export default ProjectButton;
