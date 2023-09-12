import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { sidebarItems } from "../Router/Router";
import { NoBorderButton } from "../custom-button/noBorderButton";

export function Sidebar(props: any) {
  const sidebarLinks = sidebarItems.map((item, index) => (
    <div key={"D" + item.href + index}>
      <Link key={"L" + item.href + index} to={item.href}>
        <NoBorderButton title={item.title} key={"B" + item.href + index}></NoBorderButton>
      </Link>
    </div>
  ));
  return (
    <div data-testid="sidebar-сontainer" className="ml-1 w-40 border-2 border-black border-solid">
      {sidebarLinks}
    </div>
  );
}
