import "./style.css";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import History from "../pages/History";
import Landing from "../pages/Landing";

const Layout = () => {
  return (
    <>
      <section className="main-container">
        <NavBar />
        <Landing />
        <Home />
        <About />
        <History />
        <Experience />
        <Contact />
      </section>
    </>
  );
};

export default Layout;
