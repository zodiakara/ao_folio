import { IconButton, Link } from "@mui/material";

function FooterButton({ address, icon }) {
  return (
    <Link href={address}>
      <IconButton
        size="large"
        sx={{ color: ["#f5f5f5"], "&:hover": { opacity: 80 } }}
      >
        {icon}
      </IconButton>
    </Link>
  );
}

export default FooterButton;
