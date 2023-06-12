import { Button } from "@mui/material";

const ButtonPink = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#fa8e7f",
        marginY: "0.5rem",
        "&:hover": { backgroundColor: "#fd6651" },
      }}
    >
      {props.text}
    </Button>
  );
};

export default ButtonPink;
