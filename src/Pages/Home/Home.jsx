import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import "./Home.css";

const Home = ({ sidebar }) => {
  const [category, setCatgory] = useState(0);
  return (
    <div>
      <Sidebar sidebar={sidebar} category={category} setCatgory={setCatgory} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </div>
  );
};

export default Home;
