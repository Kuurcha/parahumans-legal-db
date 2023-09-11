import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { sidebarItems } from "../Router/Router";

export function Sidebar(props: any) {
  const sidebarLinks = sidebarItems.map((item, index) => (
    <Link key={"L" + item.href + index} to={item.href}>
      <Button key={"B" + item.href + index}>{item.title}</Button>
    </Link>
  ));
  return (
    <div data-testid="sidebar-сontainer" className="ml-1 w-40 border-2 border-black border-solid">
      {sidebarLinks}
    </div>
  );
}
