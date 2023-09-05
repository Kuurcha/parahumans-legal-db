import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
type MenuItem = {
  title: string;
  href: string;
};

const mockItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "App1", href: "/app1" },
  { title: "App2", href: "/app2" },
];

let menuItems: MenuItem[] = [];
export function Sidebar(props: any) {
  menuItems = mockItems;
  const links = mockItems.map((item) => <Link to={item.href}>{item.title}</Link>);
  return <div className="ml-1 w-40 border-2 border-black border-solid">{links}</div>;
}
