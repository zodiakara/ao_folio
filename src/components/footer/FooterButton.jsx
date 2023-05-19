import { IconButton, Link } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

function FooterButton({ address, icon }) {
  return (
    <Link href={address}>
      <IconButton
        size="large"
        sx={{ color: ["#f5f5f5"], "&hover": { backgroundColor: "white" } }}
      >
        {icon}
      </IconButton>
    </Link>
  );
}

export default FooterButton;
