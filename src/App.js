import "./App.css";
import MyNavbar from "./components/MyNav";
import About from "./components/about/About";
import ContactPage from "./components/contact/ContactPage";
import Footer from "./components/footer/Footer";
import WelcomePage from "./components/main/Welcome";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <MyNavbar />
      <WelcomePage />
      <About />
      <Projects />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
