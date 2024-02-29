import { useState } from "react";
import "./style.css";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={`navbar ${isSidebarOpen ? "open" : "closed"}`}>
      <button className="icon" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <TbSquareRoundedArrowDownFilled />
        )}
      </button>
      {isSidebarOpen && (
        <>
          <div className="link">Home</div>
          <div className="link">About</div>
          <div className="link">Experience</div>
          <div className="link">History</div>
          <div className="link">Contact</div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
