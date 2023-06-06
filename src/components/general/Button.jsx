function Button(text) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#fa8e7f",
        marginY: "0.5rem",
        "&:hover": { backgroundColor: "#fd6651" },
      }}
    >
      {text}
    </Button>
  );
}

export default Button;
