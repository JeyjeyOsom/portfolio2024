import { Outlet } from "react-router-dom";
import "./style.css";
import NavBar from "../components/NavBar";
const Layout = () => {
  return (
    <>
      <div className="main-container">
        <div className="navbar-container">
          <NavBar />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
