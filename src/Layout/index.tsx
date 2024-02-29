import "./style.css";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import History from "../pages/History";

const Layout = () => {
  return (
    <>
      <div className="main-container">
        <NavBar />
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Contact />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <History />
        </section>
      </div>
    </>
  );
};

export default Layout;
