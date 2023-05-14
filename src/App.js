import { Box, Container, Grid } from "@mui/material";
import "./App.css";
import MyNavbar from "./components/MyNav";
import Sidebar from "./components/Sidebar";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <MyNavbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          overflow: "auto",
        }}
      >
        <Grid container spacing={1} columns={12}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}></Grid>
          <About />
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default App;
