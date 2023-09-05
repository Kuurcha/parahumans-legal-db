import React from "react";
import "./home.css";
import ThemePicker from "../../Components/ThemePicker";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Topbar } from "../../Components/Topbar/topbar";

function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row">
        <Topbar />
        <ThemePicker></ThemePicker>
      </div>
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="ml-4 w-96 border-2 border-black border-solid"> PLACEHOLDER </div>
      </div>
    </div>
  );
}

export default Home;
