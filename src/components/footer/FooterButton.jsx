import { IconButton, Link } from "@mui/material";

function FooterButton({ address, icon }) {
  return (
    <Link href={address}>
      <IconButton
        size="large"
        sx={{
          color: "black",
          "&:hover": { opacity: 80, backgroundColor: "#fa8e7f" },
        }}
      >
        {icon}
      </IconButton>
    </Link>
  );
}

export default FooterButton;
