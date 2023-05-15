import { IconButton, Link } from "@mui/material";

function FooterButton({ address, icon }) {
  return (
    <Link href={address}>
      <IconButton size="large" color="default">
        {icon}
      </IconButton>
    </Link>
  );
}

export default FooterButton;
