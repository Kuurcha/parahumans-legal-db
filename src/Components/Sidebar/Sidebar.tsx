import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { sidebarItems } from "../Router/Router";

export function Sidebar(props: any) {
  return (
    <div data-testid="sidebar-сontainer" className="ml-1 w-40 border-2 border-black border-solid">
      {sidebarItems.map((item) => (
        <Link to={item.href}>
          <Button>{item.title}</Button>
        </Link>
      ))}
    </div>
  );
}
