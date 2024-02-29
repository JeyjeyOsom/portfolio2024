import React from "react";
import "./style.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="left-div">
          <h1>Hello!</h1>
          <h2>My Name is Juan Dejon</h2>
          <h2>Web Developer</h2>
          <h2>
            Im a Bachelors Degree holder of Information Technology,<br></br>{" "}
            with with over 2 years of developement experience!
          </h2>
        </div>
        <div className="right-div">
          <div className="bg-effect">
            <img draggable="false" src="./img/ako.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
