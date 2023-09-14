import React from "react";
import "./home.css";
import ThemePicker from "../../Components/ThemePicker/ThemePicker";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Topbar } from "../../Components/Topbar/topbar";

import { Button } from "flowbite-react";

function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row h-full">
        <Topbar />
        <ThemePicker></ThemePicker>
      </div>
      <div className="flex flex-row flex-1 h-full overflow-hidden">
        <div className="flex flex-col">
          <Sidebar />
        </div>
        <div className="flex flex-col">
          <div className="m-2 ml-4 flex-1 contentPage border-gradient flex-grow"> PLACEHOLDER </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
